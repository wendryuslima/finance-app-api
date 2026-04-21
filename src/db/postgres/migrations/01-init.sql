CREATE TABLE IF NOT EXISTS users (
    ID UUID PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

DO $$ BEGIN
    CREATE TYPE transactions_types AS ENUM ('EARNING', 'EXPENSE', 'INVESTMENT');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;
   
CREATE TABLE IF NOT EXISTS transactions (
    ID UUID PRIMARY KEY,
    user_id UUID REFERENCES users(ID) ON DELETE CASCADE,
    title VARCHAR(100) NOT NULL,
    type transactions_types NOT NULL,
    date DATE NOT NULL,
    amount NUMERIC(10, 2) NOT NULL
);

