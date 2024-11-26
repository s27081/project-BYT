import pytest


def test_sum_numbers_positive():
    assert sum_numbers(2, 3) == 5


def test_sum_numbers_negative():
    assert sum_numbers(-1, 1) == 0


def test_sum_numbers_zero():
    assert sum_numbers(0, 0) == 0
