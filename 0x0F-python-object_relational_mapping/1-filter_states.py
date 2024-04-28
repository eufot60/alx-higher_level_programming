#!/usr/bin/python3
"""
 a script that lists all states with a name starting with N (upper N) from the database hbtn_0e_0_usa:
 """

 if __name__ == '__main__':
     import MySQLdb
     import sys

     conn = MySQLdb.connect(
        user=sys.argv[1],
        password=sys.argv[2],
        db=sys.argv[3],
        port=3306,
        host='localhost'
        )

    cur = conn.cursor()
    cur.execute("SELECT * FROM states ORDER BY id ASC")

    query_rows = cur.fetchall()
    for row in query_rows:
        if (row[1][0] == 'N'):
            print(row)
    cur.close()
    conn.close()
