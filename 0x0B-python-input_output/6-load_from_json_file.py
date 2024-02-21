#!/usr/bin/python3
"""Defines a JSON file-writing function."""
import json


def save_to_json_file(my_obj, finename):
    """Write an object to a text file using JSON reprensentation."""
    with open(filename,"w") as f:
        jnson.dmp(my_obj, f)
