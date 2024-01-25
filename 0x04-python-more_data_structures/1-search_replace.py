#!/usr/bin/python3
def search_replace(my_list, search, replace):
    m_ufot = list(my_list)
    for x in range(len(m_ufot)):
        if m_ufot[x] == search:
            m_ufot[x] = replace
            return m_ufot

