export interface Developer {
  // name: string;
  // role: string;
  // company: string;
  about: string;
  code: string[];
  interests: string[];
  frameWorks: string[];
  toolsUsed: string[];
  ides: string[];
}

export const Akshay: Developer = {
  about: "Hey, I'm Akshay V, a CSE undergrad from NITT Trichy with keen interests in building scalable \nand secure applications, and exploring financial and leadership opportunities",
  code: ["Golang", "Python", "Elixir", "Kotlin", "Swift", "Dart", "C++", "C", "SQL"],
  interests: [
    "Application-Development",
    "Artificial Intelligence",
    "Backend Development",
    "Finance",
    "Leadership",
    "Sports"
  ],
  toolsUsed: ["Docker", "Git", "Excel", "PowerBI", "Postman","Github"],
  ides: ["VSCode", "Android Studio", "Xcode", "PyCharm"],
  frameWorks: ["Flask", "FastAPI", "Phoenix", "Gin", "PostGIS", "PostgreSQL", "MySQL", "Cassandra", "ScyllaDB", "CockroachDB",
    "Tensorflow", "numpy", "matplotlib"]
};