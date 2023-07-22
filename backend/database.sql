CREATE TABLE shots (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    originalTitle TEXT,
    original TEXT,
    thumbnail TEXT
);

INSERT INTO Shots (originalTitle, original, thumbnail) VALUES 
('Street', 'https://unsplash.com/photos/kMlOBoUZe1w/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg5ODYwMzA4fA&force=true&w=1920', 'https://live.staticflickr.com/65535/53060548751_e22161a681_o_d.jpg'),
('Empy street', 'https://unsplash.com/photos/j2zmqd24muQ/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg5ODU2MzgwfA&force=true&w=1920', 'https://live.staticflickr.com/65535/53060548771_8d0261332f_o_d.jpg'),
('Cloudy sky', 'https://unsplash.com/photos/v5tf4xSZSO0/download?ixid=M3wxMjA3fDB8MXxhbGx8MTAwfHx8fHx8Mnx8MTY4OTg1NzUxNnw&force=true&w=1920', 'https://live.staticflickr.com/65535/53060735469_3931beab17_o_d.jpg'),
('Landscape', 'https://unsplash.com/photos/qpZaHxUFMCI/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg5ODU3NDA0fA&force=true&w=1920', 'https://live.staticflickr.com/65535/53060735429_21a228044a_o_d.jpg'),
('Caucasus mountains', 'https://unsplash.com/photos/F5m81gkjfXs/download?ixid=M3wxMjA3fDB8MXxhbGx8MXx8fHx8fDJ8fDE2OTAwMDEwNzB8&force=true&w=1920', 'https://live.staticflickr.com/65535/53062788414_634e01eefa_o_d.jpg'),
('Reims street', 'https://unsplash.com/photos/QvYb-l8fBWg/download?ixid=M3wxMjA3fDB8MXxhbGx8ODN8fHx8fHwyfHwxNjg5OTk5NDM2fA&force=true&w=1920', 'https://live.staticflickr.com/65535/53062964230_377130cc60_o_d.jpg'),
('Sky', 'https://unsplash.com/photos/lD3tPh9o7Hc/download?ixid=M3wxMjA3fDB8MXxhbGx8ODJ8fHx8fHwyfHwxNjg5ODU3NTEyfA&force=true&w=1920', 'https://live.staticflickr.com/65535/53061034763_d5367e6e96_o_d.jpg');


CREATE TABLE Styles (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name TEXT
);

INSERT INTO Styles (name) VALUES 
('Landscape'), 
('Street'), 
('Sky');


CREATE TABLE Shots_Styles (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    shot_id INTEGER,
    style_id INTEGER,
    FOREIGN KEY (shot_id) REFERENCES Shots(id),
    FOREIGN KEY (style_id) REFERENCES Styles(id)
);