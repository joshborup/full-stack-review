CREATE TABLE users_fullstackreview (
    id SERIAL PRIMARY KEY
    , auth0_sub TEXT NOT NULL
    , name TEXT NOT NULL
    , picture TEXT
    , email TEXT NOT NULL
);