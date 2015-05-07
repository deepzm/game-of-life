from kivy.app import App
from ui.grid import UIGrid


class GameOfLifeUI(App):
    """UI container for game of life"""

    def game_with(self, grid):
        self.grid = grid
        return self

    def build(self):
        return UIGrid(grid=self.grid)
