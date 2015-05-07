from kivy.uix.gridlayout import GridLayout
from ui.cell import UICell


class UIGrid(GridLayout):
    """docstring for UIGrid"""

    def __init__(self, **kw):
        super(UIGrid, self).__init__(**kw)
        grid = kw['grid']
        self.cols = grid.columns
        for cell in grid:
            uicell = UICell(model=cell)
            cell.bind(state=uicell.update_color)
            self.add_widget(uicell)
