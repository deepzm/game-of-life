
class StateNotSavedError(Exception):
    def __str__(self):
        return repr("A previous state has not been saved")


class StateNotSetError(Exception):
    def __str__(self):
        return repr("State has not been set")
