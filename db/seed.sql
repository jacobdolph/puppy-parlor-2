INSERT INTO users (first_name, last_name, email, password, createdAt, updatedAt)
VALUES ("John", "Doe", "johnDoe@gmail.com", "111111", "2020-01-01 10:10:10", "2020-01-01 10:10:10");
INSERT INTO users (first_name, last_name, email, password, createdAt, updatedAt)
VALUES ("Jerry", "Dimmer", "jerryDoe@gmail.com", "111112", "2020-01-01 10:10:10", "2020-01-01 10:10:10");
INSERT INTO users (first_name, last_name, email, password, createdAt, updatedAt)
VALUES ("Joey", "Summers", "joeyDoe@gmail.com", "111113", "2020-01-01 10:10:10", "2020-01-01 10:10:10");
INSERT INTO users (first_name, last_name, email, password, createdAt, updatedAt)
VALUES ("Boe", "Duke", "boeDoe@gmail.com", "111114", "2020-01-01 10:10:10", "2020-01-01 10:10:10");
INSERT INTO users (first_name, last_name, email, password, createdAt, updatedAt)
VALUES ("todd", "Randall", "toddDoe@gmail.com", "141111", "2020-01-01 10:10:10", "2020-01-01 10:10:10");
INSERT INTO users (first_name, last_name, email, password, createdAt, updatedAt)
VALUES ("Jeremy", "Conner", "JeremyDoe@gmail.com", "511111", "2020-01-01 10:10:10", "2020-01-01 10:10:10");
INSERT INTO users (first_name, last_name, email, password, createdAt, updatedAt)
VALUES ("Rocky", "Breatie", "rockyDoe@gmail.com", "611111", "2020-01-01 10:10:10", "2020-01-01 10:10:10");
INSERT INTO users (first_name, last_name, email, password, createdAt, updatedAt)
VALUES ("Dawson", "Copeland", "DawsonDoe@gmail.com", "111711", "2020-01-01 10:10:10", "2020-01-01 10:10:10");
INSERT INTO users (first_name, last_name, email, password, createdAt, updatedAt)
VALUES ("Milicent", "Grant", "MilicentDoe@gmail.com", "111181", "2020-01-01 10:10:10", "2020-01-01 10:10:10");
INSERT INTO users (first_name, last_name, email, password, createdAt, updatedAt)
VALUES ("Sally", "Wachowski", "sallyDoe@gmail.com", "1111911", "2020-01-01 10:10:10", "2020-01-01 10:10:10");
INSERT INTO users (first_name, last_name, email, password, createdAt, updatedAt)
VALUES ("Gretchen", "Linus", "GretchenDoe@gmail.com", "111881", "2020-01-01 10:10:10", "2020-01-01 10:10:10");
INSERT INTO users (first_name, last_name, email, password, createdAt, updatedAt)
VALUES ("Terry", "Cruise", "terryDoe@gmail.com", "111771", "2020-01-01 10:10:10", "2020-01-01 10:10:10");
INSERT INTO users (first_name, last_name, email, password, createdAt, updatedAt)
VALUES ("Mal", "Fran", "malDoe@gmail.com", "111551", "2020-01-01 10:10:10", "2020-01-01 10:10:10");
INSERT INTO users (first_name, last_name, email, password, createdAt, updatedAt)
VALUES ("Luke", "Skywalker", "lukeDoe@gmail.com", "441111", "2020-01-01 10:10:10", "2020-01-01 10:10:10");
INSERT INTO users (first_name, last_name, email, password, createdAt, updatedAt)
VALUES ("Don", "Trudee", "donDoe@gmail.com", "111133", "2020-01-01 10:10:10", "2020-01-01 10:10:10");
INSERT INTO users (first_name, last_name, email, password, createdAt, updatedAt)
VALUES ("Chris", "Tomlin", "chrisDoe@gmail.com", "112211", "2020-01-01 10:10:10", "2020-01-01 10:10:10");
INSERT INTO users (first_name, last_name, email, password, createdAt, updatedAt)
VALUES ("Pat", "Lacosta", "patDoe@gmail.com", "1113331", "2020-01-01 10:10:10", "2020-01-01 10:10:10");

-- seed for dog activities
INSERT INTO dogactivities (trailDistance, feedFrequency, feedAmount, createdAt, updatedAt)
VALUES ("5", "Twice a Day", "One Cup Per Day", "2020-01-01 10:10:10", "2020-01-01 10:10:10");
INSERT INTO dogactivities (trailDistance, feedFrequency, feedAmount,, createdAt, updatedAt)
VALUES ("10", "Twice a Day", "Two Cups Per Day", "2020-01-01 10:10:10", "2020-01-01 10:10:10");
INSERT INTO dogactivities (trailDistance, feedFrequency, feedAmount, , createdAt, updatedAt)
VALUES ("15", "Twice a Day", "Three and a Half Cups Per Day", "2020-01-01 10:10:10", "2020-01-01 10:10:10");

-- seed for dogs
INSERT INTO dogs (name, size, breed, vaccinated, createdAt, updatedAt, UserId, dogActivityId)
VALUES ("Romeo", "Small", "Chihuahua", true,"2020-01-01 10:10:10", "2020-01-01 10:10:10",1,1);
INSERT INTO dogs (name, size, breed, vaccinated, createdAt, updatedAt, UserId, dogActivityId)
VALUES ("Todd", "Medium", "Lab", true,"2020-01-01 10:10:10", "2020-01-01 10:10:10",2,2);
INSERT INTO dogs (name, size, breed, vaccinated, createdAt, updatedAt, UserId, dogActivityId)
VALUES ("Raskal", "Large", "Mastif", true,"2020-01-01 10:10:10", "2020-01-01 10:10:10",3,3);
INSERT INTO dogs (name, size, breed, vaccinated, createdAt, updatedAt, UserId, dogActivityId)
VALUES ("Sir Kingsly", "Medium", "Beagle", true,"2020-01-01 10:10:10", "2020-01-01 10:10:10",4,2);
INSERT INTO dogs (name, size, breed, vaccinated, createdAt, updatedAt, UserId, dogActivityId)
VALUES ("Spot", "Small", "Chihuahua", true,"2020-01-01 10:10:10", "2020-01-01 10:10:10",5,1);
INSERT INTO dogs (name, size, breed, vaccinated, createdAt, updatedAt, UserId, dogActivityId)
VALUES ("Fido", "Medium", "Dalmation", false,"2020-01-01 10:10:10", "2020-01-01 10:10:10",6,2);
INSERT INTO dogs (name, size, breed, vaccinated, createdAt, updatedAt, UserId, dogActivityId)
VALUES ("Rex", "Large", "Great Dane", true,"2020-01-01 10:10:10", "2020-01-01 10:10:10",7,3);
INSERT INTO dogs (name, size, breed, vaccinated, createdAt, updatedAt, UserId, dogActivityId)
VALUES ("Sally", "Medium", "Poodle", true,"2020-01-01 10:10:10", "2020-01-01 10:10:10",8,2);
INSERT INTO dogs (name, size, breed, vaccinated, createdAt, updatedAt, UserId, dogActivityId)
VALUES ("Mister Tomkins", "Small", "Terrier", true,"2020-01-01 10:10:10", "2020-01-01 10:10:10",9,1);
INSERT INTO dogs (name, size, breed, vaccinated, createdAt, updatedAt, UserId, dogActivityId)
VALUES ("Coco", "Medium", "Beagle", true,"2020-01-01 10:10:10", "2020-01-01 10:10:10",10,2);
INSERT INTO dogs (name, size, breed, vaccinated, createdAt, updatedAt, UserId, dogActivityId)
VALUES ("Daisy", "Large", "Great Dane", false,"2020-01-01 10:10:10", "2020-01-01 10:10:10",11,3);
INSERT INTO dogs (name, size, breed, vaccinated, createdAt, updatedAt, UserId, dogActivityId)
VALUES ("Rosie", "Medium", "Bull Dog", true,"2020-01-01 10:10:10", "2020-01-01 10:10:10",12,2);
INSERT INTO dogs (name, size, breed, vaccinated, createdAt, updatedAt, UserId, dogActivityId)
VALUES ("Teddy", "Small", "Chihuahua", true,"2020-01-01 10:10:10", "2020-01-01 10:10:10",13,1);
INSERT INTO dogs (name, size, breed, vaccinated, createdAt, updatedAt, UserId, dogActivityId)
VALUES ("Milo", "Medium", "Beagle", true,"2020-01-01 10:10:10", "2020-01-01 10:10:10",14,2);
INSERT INTO dogs (name, size, breed, vaccinated, createdAt, updatedAt, UserId, dogActivityId)
VALUES ("Frankie", "Small", "Chihuahua", false,"2020-01-01 10:10:10", "2020-01-01 10:10:10",15,1);
INSERT INTO dogs (name, size, breed, vaccinated, createdAt, updatedAt, UserId, dogActivityId)
VALUES ("Lola", "Large", "Saint Bernard", true,"2020-01-01 10:10:10", "2020-01-01 10:10:10",16,3);
INSERT INTO dogs (name, size, breed, vaccinated, createdAt, updatedAt, UserId, dogActivityId)
VALUES ("Oscar", "Small", "Chihuahua", true,"2020-01-01 10:10:10", "2020-01-01 10:10:10",17,1);