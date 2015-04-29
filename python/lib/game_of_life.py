from game_of_life_models import Grid


class GameOfLife(object):

    """The Game of Life"""

    def __init__(self, grid):
        self.grid = grid

    def go(self):
        grid = self.grid
        new_grid_state = grid.new_state()
        for cell in grid:

            if cell.has_fewer_than_two_live_neighbours(grid):
                new_grid_state.dead().at(cell.location)

            elif cell.has_two_or_three_live_neighbours(grid):
                new_grid_state.preserve(cell.location)

            elif cell.more_than_three_live_neighbours(grid):
                new_grid_state.dead().at(cell.location)

            elif cell.exactly_three_live_neighbours_becomes(grid):
                new_grid_state.alive().at(cell.location)

            else:
                print 'Are you kidding me!!'

        grid.apply(new_grid_state)

GameOfLife(Grid()).go()
