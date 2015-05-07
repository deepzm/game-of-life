import sys


def generate_martix(rows, columns):
    default_matrix = [[0 for column in range(columns)] for row in range(rows)]
    for row in default_matrix:
        print ''
        sys.stdout.write('[')
        for column in row:
            sys.stdout.write(str(column) + ',')
        sys.stdout.write('],')

generate_martix(20, 20)
