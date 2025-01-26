-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: questions
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `question_options`
--

DROP TABLE IF EXISTS `question_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question_options` (
  `question_id` bigint NOT NULL,
  `options` varchar(255) DEFAULT NULL,
  KEY `FKjk4v42xhyfv4ca1yyhorsg5tv` (`question_id`),
  CONSTRAINT `FKjk4v42xhyfv4ca1yyhorsg5tv` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_options`
--

LOCK TABLES `question_options` WRITE;
/*!40000 ALTER TABLE `question_options` DISABLE KEYS */;
INSERT INTO `question_options` VALUES (1,'A) Java Development Kit'),(1,'B) Java Data Kit'),(1,'C) Java Document Kit'),(1,'D) Java Database Kit'),(2,'A) array.length()'),(2,'B) length(array)  '),(2,'C) array.length'),(2,'D) array.size()'),(3,'A) =='),(3,'B) ='),(3,'C) equals()'),(3,'D) compareTo()'),(4,'A) public'),(4,'B) protected'),(4,'C) private'),(4,'D) default'),(5,'A) Это класс, который не может быть расширен'),(5,'B) Это абстрактный класс'),(5,'C) Это набор абстрактных методов, который может реализовываться различными классами'),(5,'D) Это конкретный класс'),(6,'A) int'),(6,'B) boolean'),(6,'C) String'),(6,'D) char'),(7,'A) try-catch'),(7,'B) throw-catch'),(7,'C) except'),(7,'D) handle'),(8,'A) initialize()'),(8,'B) start()'),(8,'C) constructor()'),(8,'D) <имя класса> (например, MyClass())'),(9,'A) Программа завершится без ошибок'),(9,'B) Исключение будет проигнорировано'),(9,'C) Программа продолжит выполняться'),(9,'D) Программа будет завершена с ошибкой'),(10,'A) Процесс компиляции кода'),(10,'B) Процесс удаления неиспользуемых объектов из памяти'),(10,'C) Процесс обработки исключений'),(10,'D) Процесс оптимизации производительности'),(11,'A) List'),(11,'B) Map'),(11,'C) Set'),(11,'D) Queue'),(12,'A) Integer'),(12,'B) Double'),(12,'C) Character'),(12,'D) String'),(13,'A) private'),(13,'B) public'),(13,'C) protected'),(13,'D) default'),(14,'A) Вернется 123'),(14,'B) Вернется 0'),(14,'C) Возникнет исключение NumberFormatException'),(14,'D) Вернется 123abc'),(15,'A) clone()'),(15,'B) copy()'),(15,'C) duplicate()'),(15,'D) rast()'),(16,'A) Serializable'),(16,'B) Runnable'),(16,'C) Stream'),(16,'D) Cloneable'),(17,'A) Класс не может быть изменен'),(17,'B) Класс не может наследоваться'),(17,'C) Класс может иметь только один экземпляр'),(17,'D) Класс не может иметь абстрактные методы'),(18,'A) new ClassName() { }'),(18,'B) ClassName() { }'),(18,'C) new ClassName: { }'),(18,'D) ClassName: { }'),(19,'A) метод в интерфейсе'),(19,'B) метод в абстрактном классе'),(19,'C) метод с ключевым словом static'),(19,'D) метод, который наследуется от родительского класса'),(20,'A) boolean equals(Object obj)'),(20,'B) int equals(Object obj)'),(20,'C) void equals(Object obj)'),(20,'D) String equals(Object obj)'),(21,'A) Произойдет компиляция без ошибок'),(21,'B) Возникнет ошибка выполнения'),(21,'C) Возникнет ошибка компиляции'),(21,'D) Будет выбран конструктор по умолчанию в родительском классе  '),(22,'A) ArrayList'),(22,'B) HashMap'),(22,'C) Date'),(22,'D) Optional'),(23,'A) Можно обратиться напрямую'),(23,'B) Необходимо создать экземпляр класса'),(23,'C) Используется ключевое слово static'),(23,'D) Никак, доступ невозможен'),(24,'A) add(int index, E element)'),(24,'B) insert(int index, E element)'),(24,'C) put(int index, E element)'),(24,'D) add(E element)'),(25,'A) Hello'),(25,'B) null'),(25,'C) Hellonull'),(25,'D) Ошибка компиляции'),(26,'A) ClassLoader'),(26,'B) Class'),(26,'C) Field'),(26,'D) Все вышеперечисленные'),(27,'A) Удаляет первый элемент из списка'),(27,'B) Удаляет все элементы из списка'),(27,'C) Очищает список, но не освобождает память'),(27,'D) Удаляет элементы, но оставляет их в памяти'),(28,'A) synchronized'),(28,'B) lock'),(28,'C) critical'),(28,'D) private'),(29,'A) throws IOException, SQLException'),(29,'B) catch IOException, SQLException'),(29,'C) throw IOException, SQLException'),(29,'D) raise IOException, SQLException');
/*!40000 ALTER TABLE `question_options` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-26 18:27:09
