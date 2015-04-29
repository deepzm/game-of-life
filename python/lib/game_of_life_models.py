from game_of_life_exceptions import StateNotSavedError, StateNotSetError


ALIVE = True
DEAD = False


class Grid(object):
    """Game of life grid"""

    def __init__(self, rows=5, columns=5):
        self.rows = rows
        self.columns = columns
        self.cells = [[0 for x in range(5)] for x in range(5)]

    def cell(self, row, column):
        return self.cells[row][column]

    def new_state(self):
        return GridState(self.rows, self.columns)


class GridState(object):
    """Stores the state of a grid"""

    def __init__(self, rows, columns):
        self.state = [[False for x in range(5)] for x in range(5)]

    def dead(self):
        if(self.has_new_state()):
            raise StateNotSavedError
        else:
            self.new_state = False

    def alive(self):
        if(self.has_new_state()):
            raise StateNotSavedError
        else:
            self.new_state = True

    def preserve(self, state):
        if(self.has_new_state()):
            raise StateNotSavedError
        else:
            self.new_state = state

    def at(self, location):
        if(self.has_new_state()):
            self.state[location.row][location.column] = self.new_state
            self.new_state = None
        else:
            raise StateNotSetError

    def has_new_state(self):
        return self.new_state is None


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
