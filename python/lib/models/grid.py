
from models.cell import Cell
from errors.exceptions import StateNotSavedError, StateNotSetError


class GridState(object):
    """Stores the state of a grid"""

    def __init__(self, state_matrix):
        self.state = self.to_boolean_matrix(state_matrix)
        self.rows = len(state_matrix)
        self.columns = len(state_matrix[0])
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

    def to_boolean_matrix(self, state_matrix):
        state = []
        for row in state_matrix:
            columns = []
            for column in row:
                columns.append(self.to_boolean(column))
            state.append(columns)
        return state

    def to_boolean(self, state):
        if state == 1:
            return True
        else:
            return False


def default_matrix_for(rows=5, columns=5):
    default_matrix = [[0 for column in range(columns)] for row in range(rows)]
    return default_matrix


DEFAULT_GRID_STATE = GridState(default_matrix_for())


class Grid(object):
    """Game of life grid"""

    def __init__(self, state=DEFAULT_GRID_STATE):
        self.rows = state.rows
        self.columns = state.columns
        self.cells = []
        self.__init_cells__()
        self.apply(state)

    def __init_cells__(self):
        for i in range(self.rows):
            column = []
            for j in range(self.columns):
                column.append(Cell(i, j))
            self.cells.append(column)

    def cell(self, row, column):
        return self.cells[row][column]

    def new_state(self):
        return GridState(default_matrix_for(self.rows, self.columns))

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


def on(grid):
    return GridManager(grid)


def with_state_for(matrix):
    return GridState(matrix)
