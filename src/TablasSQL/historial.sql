-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 08, 2022 at 11:36 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `juego`
--

-- --------------------------------------------------------

--
-- Table structure for table `historial`
--

CREATE TABLE `historial` (
  `Codigo` varchar(15) NOT NULL,
  `Id` int(10) NOT NULL,
  `OldUser` varchar(15) NOT NULL,
  `NewUser` varchar(15) NOT NULL,
  `Price` int(10) NOT NULL,
  `Date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `historial`
--

INSERT INTO `historial` (`Codigo`, `Id`, `OldUser`, `NewUser`, `Price`, `Date`) VALUES
('N1sd41', 1, 'Sin dueño', 'Carlosjefe', 120, '2022-06-06 00:03:37'),
('N1sd41', 2, 'Carlosjefe', 'JairJtoo', 20000, '2022-06-06 01:47:43'),
('N1sd41', 3, 'JairJtoo', 'Carlosjefe', 20000, '2022-06-06 01:56:37'),
('B2Wb41', 1, 'Sin dueño', 'Carlosjefe', 170, '2022-06-06 01:57:21'),
('B1YW21', 1, 'Sin dueño', 'Carlosjefe', 120, '2022-06-06 01:57:56'),
('K2Wb41', 1, 'Sin dueño', 'Alan12', 123, '2022-06-08 16:23:34');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
