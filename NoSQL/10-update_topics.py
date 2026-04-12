#!/usr/bin/env python3
"""
Module for filtering schools by a specific topic
"""


def schools_by_topic(mongo_collection, topic):
    """
    Returns the list of school having a specific topic
    """
    return [school for school in mongo_collection.find({"topics": topic})]
