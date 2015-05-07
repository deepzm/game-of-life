from models.grid import Grid, on, with_state
from ui.game_of_life import GameOfLifeUI
from kivy.clock import Clock


class GameOfLife(object):

    """The Game of Life"""

    def __init__(self, state):
        self.grid = Grid(state)

    def evolve(self, dt):
        print 'evolve'
        grid = self.grid
        new_grid_state = grid.new_state()
        for cell in grid:
            if cell.has_fewer_than_two_live_neighbours(on(grid)):
                new_grid_state.dead().at(cell.location())

            elif cell.has_exactly_three_live_neighbours(on(grid)):
                new_grid_state.alive().at(cell.location())

            elif cell.has_two_or_three_live_neighbours(on(grid)):
                new_grid_state.preserve(cell.state).at(cell.location())

            elif cell.more_than_three_live_neighbours(on(grid)):
                new_grid_state.dead().at(cell.location())

            else:
                print 'Are you kidding me!!'

        grid.apply(new_grid_state)

    def start_evolving(self):
        Clock.schedule_interval(self.evolve, 0.75)
        GameOfLifeUI().game_with(self.grid).run()
