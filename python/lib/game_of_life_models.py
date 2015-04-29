from game_of_life_exceptions import StateNotSavedError, StateNotSetError


ALIVE = True
DEAD = False


class Grid(object):
    """Game of life grid"""

    def __init__(self, rows=5, columns=5):
        self.rows = rows
        self.columns = columns
        self.cells = []
        for i in range(rows):
            column = []
            for j in range(columns):
                column.append(Cell(i , j))
            self.cells.append(column)

    def cell(self, row, column):
        return self.cells[row][column]

    def new_state(self):
        return GridState(self.rows, self.columns)

    def has_row(self, row):
        return row < self.rows

    def has_column(self, column):
        return column < self.columns

    def __iter__(self):
        return GridIterator(self)

    def apply(self, state):
        for row in range(self.rows):
            for column in range(self.columns):
                cell = self.cells[row][column]
                cell.set(state.get(cell.location()))


class GridState(object):
    """Stores the state of a grid"""

    def __init__(self, rows, columns):
        self.state = [[False for x in range(5)] for x in range(5)]
        self.new_state = None

    def dead(self):
        if(self.has_new_state()):
            raise StateNotSavedError
        else:
            self.new_state = False
            return self

    def alive(self):
        if(self.has_new_state()):
            raise StateNotSavedError
        else:
            self.new_state = True
            return self

    def preserve(self, state):
        if(self.has_new_state()):
            raise StateNotSavedError
        else:
            self.new_state = state
            return self

    def at(self, location):
        if(self.has_new_state()):
            self.state[location.row][location.column] = self.new_state
            self.new_state = None
        else:
            raise StateNotSetError

    def get(self, location):
        return self.state[location.row][location.column]

    def has_new_state(self):
        return self.new_state is not None


class GridManager(object):
    """Makes complex queries on grid"""

    def __init__(self, grid):
        self.grid = grid

    def count_adjacent_live_cells(self, location):
        return self.live_adjacent_cell_count_on_row_above(location) + self.live_adjacent_cell_count_on_row(location) + self.live_adjacent_cell_count_on_row_below(location)

    def live_adjacent_cell_count_on_row_above(self, location):
        return self.live_count(location.previous_row, location.previous_column) + self.live_count(location.previous_row, location.column) + self.live_count(location.previous_row, location.next_column)

    def live_adjacent_cell_count_on_row(self, location):
        return self.live_count(location.row, location.previous_column) + self.live_count(location.row, location.next_column)

    def live_adjacent_cell_count_on_row_below(self, location):
        return self.live_count(location.next_row, location.previous_column) + self.live_count(location.next_row, location.column) + self.live_count(location.next_row, location.next_column)

    def live_count(self, row, column):
        if self.grid.has_row(row) and self.grid.has_column(column):
            return 1 if self.grid.cell(row, column).state else 0
        else:
            return 0


class GridIterator(object):
    """Helps iterate the Grid"""

    def __init__(self, grid):
        self.grid = grid
        self.rows = grid.rows
        self.columns = grid.columns
        self.row = 0
        self.column = 0

    def next(self):
        if (self.row >= self.rows) or (self.column >= self.columns):
            raise StopIteration()
        else:
            value = self.grid.cell(self.row, self.column)
            self.increment_index()
        return value

    def increment_index(self):
        self.column += 1
        if self.column >= self.columns:
            self.column = 0
            self.row += 1


class Cell(object):
    """Game of life cell"""

    def __init__(self, row, column, state=DEAD):
        self.state = state
        self.row = row
        self.column = column

    def state(self):
        return self.state

    def make_alive(self):
        self.state = ALIVE

    def kill(self):
        self.state = DEAD

    def set(self, state):
        self.state = state

    def location(self):
        return CellLocation(self.row, self.column)

    def has_fewer_than_two_live_neighbours(self, grid_manager):
        return grid_manager.count_adjacent_live_cells(self.location()) < 2

    def has_two_or_three_live_neighbours(self, grid_manager):
        adjacent_live_cells = grid_manager.count_adjacent_live_cells(self.location())
        return adjacent_live_cells == 2 or adjacent_live_cells == 3

    def more_than_three_live_neighbours(self, grid_manager):
        return grid_manager.count_adjacent_live_cells(self.location()) > 3

    def has_exactly_three_live_neighbours(self, grid_manager):
        return grid_manager.count_adjacent_live_cells(self.location()) == 3


class CellLocation(object):
    """Cell location in Grid"""

    def __init__(self, row, column):
        self.row = row
        self.previous_row = row - 1
        self.next_row = row + 1
        self.column = column
        self.previous_column = column - 1
        self.next_column = column + 1

    def row(self):
        return row

    def column(self):
        return column


def on(grid):
    return GridManager(grid)
