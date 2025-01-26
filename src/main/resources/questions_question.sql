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
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `correct_answer_index` int NOT NULL,
  `text` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1,0,'Что такое JDK?'),(2,2,'Какой из следующих методов используется для получения длины массива в Java?'),(3,2,'Какой из следующих операторов используется для сравнения объектов в Java?'),(4,2,' Какой модификатор доступа делает метод или переменную доступными только в пределах одного класса?'),(5,2,'Что такое интерфейс в Java?'),(6,2,'Какой из следующих типов данных не является примитивным в Java?'),(7,0,'Какой оператор используется для обработки исключений в Java?'),(8,3,' Какой метод вызывается при создании экземпляра класса в Java?'),(9,3,'Что происходит, если в Java не обрабатывать исключение?'),(10,1,'Что такое \"Garbage Collection\" в Java?'),(11,2,'Какой из следующих интерфейсов является частью Java Collections Framework и используется для хранения уникальных элементов?'),(12,3,'Какой из следующих классов не является классом-оберткой для примитивных типов данных?'),(13,3,'Какой модификатор доступа позволяет доступ только из одного пакета?'),(14,2,'Что произойдет, если вызвать метод Integer.parseInt(\"123abc\");?'),(15,0,' Какой из следующих методов используется для клонирования объекта?'),(16,2,' Какой из следующих интерфейсов используется для работы с потоками данных в Java?'),(17,1,'Что делает ключевое слово final в контексте класса?'),(18,0,'Какая из следующих конструкций используется для определения анонимного класса?'),(19,2,'Какой из следующих методов является статическим методом в Java?'),(20,0,'Какой из следующих методов является методом equals(), который сравнивает два объекта?'),(21,2,'Что произойдет, если мы попытаемся вызвать метод super() в конструкторе класса, но не определим соответствующий конструктор в родительском классе?'),(22,2,' Какой из следующих классов не находится в пакете java.util?'),(23,1,'Как получить доступ к члену класса внутри статического метода?'),(24,0,'Какой метод коллекции List применяется для вставки элемента в определённую позицию?'),(25,2,'Что вернет следующий код: System.out.println(\"Hello\" + null);?'),(26,3,'Какой из следующих классов является частью Java Reflection API?'),(27,1,'Что происходит при вызове метода List.clear()?'),(28,0,' Какой ключевое слово используется для блокировки объекта в многопоточном программировании?'),(29,0,'Какой из следующих вариантов объявления исключения является правильным?');
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
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
