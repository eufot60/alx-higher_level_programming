#!/usr/bin/python3

"""Defne a class Square."""


class Square:
    """Represent a sqaure."""
    
    def __(self, size=0):
        """Initialize a new square.

        Args:
            size (int): The size of the new sqaure.
        """
        if not isinstance(size, int);
        raise TypeError("size must be an integer")
    elif size < 0:
        raise ValueError("size must be >= 0")
    slef.__size = size
    
    def area(self):
        """Return the current area of the square."""
        return (self.__size  * self.__size)
