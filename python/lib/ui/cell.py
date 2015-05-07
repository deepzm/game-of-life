
from kivy.uix.widget import Widget
from kivy.uix.button import Button
from kivy.properties import BooleanProperty
from kivy.graphics import Color, Rectangle


class UICell(Widget):
    """represents a cell on the ui"""

    def __init__(self, **kw):
        super(UICell, self).__init__(**kw)
        self.model = kw['model']
        self.update_color(None, self.model.state)
        self.bind(size=self._update_rect, pos=self._update_rect)

    def _update_rect(self, instance, value):
        self.rect.pos = instance.pos
        self.rect.size = [instance.size[0] - 2, instance.size[1] - 2]

    # def on_touch_down(self, touch):
    #     print 'yay!!'
    #     if self.collide_point(*touch.pos):
    #         print self.model.state
    #         self.model.make_alive()
    #         with self.canvas:
    #             Color(.5, .5, .5)
    #             size = [self.size[0] - 2, self.size[1] - 2]
    #             self.rect = Rectangle(pos=self.pos, size=size)
    #         self.pressed = self.model.state
    #         print self.model.state
    #         return True
    #     return super(UICell, self).on_touch_down(touch)

    def update_color(self, instance, model):
        if model:
            with self.canvas:
                Color(.5, .5, .5)
                size = [self.size[0] - 2, self.size[1] - 2]
                self.rect = Rectangle(pos=self.pos, size=size)
        else:
            with self.canvas:
                Color(0, 1, 0, 1)
                size = [self.size[0] - 2, self.size[1] - 2]
                self.rect = Rectangle(pos=self.pos, size=size)
