-- creates the MySQL server user user_0d_1 and grant all priviledges
CREATE USER IF NOT EXISTS user_0d_1@localhost IDENTIFIED BY 'user_od_1_pwd';
GRANT ALL PRIVILEDGES ON * . * TO user_0d_1@localhost;