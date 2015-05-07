from kivy.properties import BooleanProperty  # Not cool!!
from kivy.uix.widget import Widget

ALIVE = True
DEAD = False


class Cell(Widget):
    """Game of life cell"""

    state = BooleanProperty(False)

    def __init__(self, row, column, state=DEAD):
        self.row = row
        self.column = column

    def make_alive(self):
        print 'alive'
        self.state = ALIVE

    def kill(self):
        print 'dead'
        self.state = DEAD

    def set(self, state):
        print state
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

    def on_state(self, instance, model):
        print ('state change {state}'.format(state=model))


class CellLocation(object):
    """Cell location in Grid"""

    def __init__(self, row, column):
        self.row = row
        self.previous_row = row - 1
        self.next_row = row + 1
        self.column = column
        self.previous_column = column - 1
        self.next_column = column + 1
