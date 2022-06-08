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
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `Id` int(18) NOT NULL,
  `Clase` varchar(15) NOT NULL,
  `Codigo` varchar(15) NOT NULL,
  `Raza` varchar(15) NOT NULL,
  `Material` varchar(15) NOT NULL,
  `Img` varchar(100) NOT NULL,
  `Precio` varchar(20) NOT NULL,
  `Usuario` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`Id`, `Clase`, `Codigo`, `Raza`, `Material`, `Img`, `Precio`, `Usuario`) VALUES
(1, 'Gema', 'G1YW21', 'Mongo', 'Adamantium', 'http://localhost:3000/Imgs/Gema.png', '120', '.'),
(2, 'Gema', 'G2Wb41', 'Ruma', 'Diamante', 'http://localhost:3000/Imgs/Gema.png', '170', '.'),
(3, 'Gema', 'G34dc1', 'Hundi', 'Platino', 'http://localhost:3000/Imgs/Gema.png', '100', '.'),
(4, 'Gema', 'G4Es21', 'Zeka', 'Cuero', 'http://localhost:3000/Imgs/Gema.png', '80', '.'),
(5, 'Gema', 'G5R241', 'Tuco', 'Hierro', 'http://localhost:3000/Imgs/Gema.png', '120', '.'),
(6, 'Gema', 'G6yE31', 'Mexa', 'Diamante', 'http://localhost:3000/Imgs/Gema.png', '110', '.'),
(7, 'Gema', 'G72kE1', 'Volto', 'Hierro', 'http://localhost:3000/Imgs/Gema.png', '70', '.'),
(8, 'Gema', 'G82D31', 'Tuco', 'Mallas', 'http://localhost:3000/Imgs/Gema.png', '130', '.'),
(9, 'Gema', 'G97nS1', 'Hundi', 'Adamantium', 'http://localhost:3000/Imgs/Gema.png', '140', '.'),
(10, 'Gema', 'G0sSd1', 'Zeka', 'Oro', 'http://localhost:3000/Imgs/Gema.png', '110', '.'),
(11, 'Casco', 'C1YW21', 'Mongo', 'Oro', 'http://localhost:3000/Imgs/Casco.png', '43243', '.'),
(12, 'Casco', 'C2Wb41', 'Ruma', 'Diamante', 'http://localhost:3000/Imgs/Casco.png', '170', '.'),
(13, 'Casco', 'C34dc1', 'Hundi', 'Platino', 'http://localhost:3000/Imgs/Casco.png', '100', '.'),
(14, 'Casco', 'C4Es21', 'Hundi', 'Diamante', 'http://localhost:3000/Imgs/Casco.png', '80', '.'),
(15, 'Casco', 'C5R241', 'Tuco', 'Hierro', 'http://localhost:3000/Imgs/Casco.png', '120', '.'),
(16, 'Casco', 'C6wer1', 'Mexa', 'Diamante', 'http://localhost:3000/Imgs/Casco.png', '110', '.'),
(17, 'Casco', 'C72kE1', 'Volto', 'Oro', 'http://localhost:3000/Imgs/Casco.png', '70', '.'),
(18, 'Casco', 'C82D31', 'Tuco', 'Mallas', 'http://localhost:3000/Imgs/Casco.png', '130', '.'),
(19, 'Casco', 'C97nS1', 'Hundi', 'Hierro', 'http://localhost:3000/Imgs/Casco.png', '140', '.'),
(20, 'Casco', 'C0sSd1', 'Zeka', 'Oro', 'http://localhost:3000/Imgs/Casco.png', '110', '.'),
(21, 'Collar', 'N1sd41', 'Mongo', 'Cuero', 'http://localhost:3000/Imgs/Collar.png', '123', 'Carlosjefe'),
(22, 'Collar', 'N2Wb41', 'Ruma', 'Diamante', 'http://localhost:3000/Imgs/Collar.png', '432', '.'),
(23, 'Collar', 'N34dc1', 'Hundi', 'Platino', 'http://localhost:3000/Imgs/Collar.png', '100', '.'),
(24, 'Collar', 'N4Es21', 'Zeka', 'Cuero', 'http://localhost:3000/Imgs/Collar.png', '80', '.'),
(25, 'Collar', 'N5R241', 'Tuco', 'Hierro', 'http://localhost:3000/Imgs/Collar.png', '120', '.'),
(26, 'Collar', 'N6yE31', 'Mexa', 'Diamante', 'http://localhost:3000/Imgs/Collar.png', '110', '.'),
(27, 'Collar', 'N72kE1', 'Volto', 'Hierro', 'http://localhost:3000/Imgs/Collar.png', '70', '.'),
(28, 'Collar', 'N82D31', 'Tuco', 'Mallas', 'http://localhost:3000/Imgs/Collar.png', '130', '.'),
(29, 'Collar', 'N97nS1', 'Hundi', 'Adamantium', 'http://localhost:3000/Imgs/Collar.png', '140', '.'),
(30, 'Collar', 'N0sSd1', 'Zeka', 'Oro', 'http://localhost:3000/Imgs/Collar.png', '110', '.'),
(31, 'Pantalones', 'S1YW21', 'Mongo', 'Oro', 'http://localhost:3000/Imgs/Pantalones.png', '120', '.'),
(32, 'Pantalones', 'S2Wb41', 'Ruma', 'Diamante', 'http://localhost:3000/Imgs/Pantalones.png', '170', '.'),
(33, 'Pantalones', 'S34dc1', 'Hundi', 'Platino', 'http://localhost:3000/Imgs/Pantalones.png', '100', '.'),
(34, 'Pantalones', 'S4Es21', 'Hundi', 'Diamante', 'http://localhost:3000/Imgs/Pantalones.png', '80', '.'),
(35, 'Pantalones', 'S5R241', 'Tuco', 'Hierro', 'http://localhost:3000/Imgs/Pantalones.png', '120', '.'),
(36, 'Pantalones', 'S6yE31', 'Mexa', 'Diamante', 'http://localhost:3000/Imgs/Pantalones.png', '110', '.'),
(37, 'Pantalones', 'S72kE1', 'Volto', 'Oro', 'http://localhost:3000/Imgs/Pantalones.png', '70', '.'),
(38, 'Pantalones', 'S82D31', 'Tuco', 'Mallas', 'http://localhost:3000/Imgs/Pantalones.png', '130', '.'),
(39, 'Pantalones', 'S97nS1', 'Hundi', 'Adamantium', 'http://localhost:3000/Imgs/Pantalones.png', '140', '.'),
(40, 'Pantalones', 'S0sSd1', 'Zeka', 'Oro', 'http://localhost:3000/Imgs/Pantalones.png', '110', '.'),
(41, 'Pecho', 'P1YW21', 'Mongo', 'Adamantium', 'http://localhost:3000/Imgs/Pecho.png', '120', '.'),
(42, 'Pecho', 'P2Wb41', 'Ruma', 'Diamante', 'http://localhost:3000/Imgs/Pecho.png', '170', '.'),
(43, 'Pecho', 'P34dc1', 'Hundi', 'Platino', 'http://localhost:3000/Imgs/Pecho.png', '100', '.'),
(44, 'Pecho', 'P4Es21', 'Zeka', 'Cuero', 'http://localhost:3000/Imgs/Pecho.png', '80', '.'),
(45, 'Pecho', 'P5R241', 'Tuco', 'Hierro', 'http://localhost:3000/Imgs/Pecho.png', '120', '.'),
(46, 'Pecho', 'P6yE31', 'Mexa', 'Diamante', 'http://localhost:3000/Imgs/Pecho.png', '110', '.'),
(47, 'Pecho', 'P72kE1', 'Volto', 'Hierro', 'http://localhost:3000/Imgs/Pecho.png', '70', '.'),
(48, 'Pecho', 'P82D31', 'Tuco', 'Mallas', 'http://localhost:3000/Imgs/Pecho.png', '130', '.'),
(49, 'Pecho', 'P97nS1', 'Hundi', 'Adamantium', 'http://localhost:3000/Imgs/Pecho.png', '140', '.'),
(50, 'Pecho', 'P0sSd1', 'Zeka', 'Oro', 'http://localhost:3000/Imgs/Pecho.png', '110', '.'),
(51, 'Capa', 'K1YW21', 'Mongo', 'Oro', 'http://localhost:3000/Imgs/Capa.png', '123', '.'),
(52, 'Capa', 'K2Wb41', 'Ruma', 'Diamante', 'http://localhost:3000/Imgs/Capa.png', '789', 'Alan12'),
(53, 'Capa', 'K34dc1', 'Hundi', 'Platino', 'http://localhost:3000/Imgs/Capa.png', '100', '.'),
(54, 'Capa', 'K4Es21', 'Hundi', 'Diamante', 'http://localhost:3000/Imgs/Capa.png', '80', '.'),
(55, 'Capa', 'K5R241', 'Tuco', 'Hierro', 'http://localhost:3000/Imgs/Capa.png', '120', '.'),
(56, 'Capa', 'K6yE31', 'Mexa', 'Diamante', 'http://localhost:3000/Imgs/Capa.png', '0', '.'),
(57, 'Capa', 'K72kE1', 'Volto', 'Cuero', 'http://localhost:3000/Imgs/Capa.png', '70', '.'),
(58, 'Capa', 'K82D31', 'Tuco', 'Mallas', 'http://localhost:3000/Imgs/Capa.png', '130', '.'),
(59, 'Capa', 'K97nS1', 'Hundi', 'Adamantium', 'http://localhost:3000/Imgs/Capa.png', '140', '.'),
(60, 'Capa', 'K0sSd1', 'Zeka', 'Oro', 'http://localhost:3000/Imgs/Capa.png', '110', '.'),
(61, 'Anillo', 'A1YW21', 'Mongo', 'Oro', 'http://localhost:3000/Imgs/Anillo.png', '120', '.'),
(62, 'Anillo', 'A2Wb41', 'Ruma', 'Diamante', 'http://localhost:3000/Imgs/Anillo.png', '170', '.'),
(63, 'Anillo', 'A34dc1', 'Hundi', 'Platino', 'http://localhost:3000/Imgs/Anillo.png', '100', '.'),
(64, 'Anillo', 'A4Es21', 'Hundi', 'Diamante', 'http://localhost:3000/Imgs/Anillo.png', '80', '.'),
(65, 'Anillo', 'A5R241', 'Tuco', 'Hierro', 'http://localhost:3000/Imgs/Anillo.png', '120', '.'),
(66, 'Anillo', 'A6yE31', 'Mexa', 'Diamante', 'http://localhost:3000/Imgs/Anillo.png', '110', '.'),
(67, 'Anillo', 'A72kE1', 'Volto', 'Oro', 'http://localhost:3000/Imgs/Anillo.png', '70', '.'),
(68, 'Anillo', 'A82D31', 'Tuco', 'Mallas', 'http://localhost:3000/Imgs/Anillo.png', '130', '.'),
(69, 'Anillo', 'A97nS1', 'Hundi', 'Adamantium', 'http://localhost:3000/Imgs/Anillo.png', '140', '.'),
(70, 'Anillo', 'A0sSd1', 'Zeka', 'Oro', 'http://localhost:3000/Imgs/Anillo.png', '110', '.'),
(71, 'Cinturon', 'B1YW21', 'Mongo', 'Oro', 'http://localhost:3000/Imgs/Cinturon.png', '120', 'Carlosjefe'),
(72, 'Cinturon', 'B2Wb41', 'Ruma', 'Diamante', 'http://localhost:3000/Imgs/Cinturon.png', '170', 'Carlosjefe'),
(73, 'Cinturon', 'B34dc1', 'Hundi', 'Platino', 'http://localhost:3000/Imgs/Cinturon.png', '100', '.'),
(74, 'Cinturon', 'B4Es21', 'Hundi', 'Diamante', 'http://localhost:3000/Imgs/Cinturon.png', '80', '.'),
(75, 'Cinturon', 'B5R241', 'Tuco', 'Hierro', 'http://localhost:3000/Imgs/Cinturon.png', '120', '.'),
(76, 'Cinturon', 'B6yE31', 'Mexa', 'Diamante', 'http://localhost:3000/Imgs/Cinturon.png', '110', '.'),
(77, 'Cinturon', 'B72kE1', 'Volto', 'Oro', 'http://localhost:3000/Imgs/Cinturon.png', '70', '.'),
(78, 'Cinturon', 'B82D31', 'Tuco', 'Mallas', 'http://localhost:3000/Imgs/Cinturon.png', '130', '.'),
(79, 'Cinturon', 'B97nS1', 'Hundi', 'Adamantium', 'http://localhost:3000/Imgs/Cinturon.png', '140', '.'),
(80, 'Cinturon', 'B0sSd1', 'Zeka', 'Oro', 'http://localhost:3000/Imgs/Cinturon.png', '110', '.'),
(81, 'Gema', 'G1YW2', 'Mongo', 'Adamantium', 'http://localhost:3000/Imgs/Gema.png', '120', '.'),
(82, 'Gema', 'G2Wb4', 'Ruma', 'Diamante', 'http://localhost:3000/Imgs/Gema.png', '170', '.'),
(83, 'Gema', 'G34dc', 'Hundi', 'Platino', 'http://localhost:3000/Imgs/Gema.png', '100', '.'),
(84, 'Gema', 'G4Es2', 'Zeka', 'Cuero', 'http://localhost:3000/Imgs/Gema.png', '80', '.'),
(85, 'Gema', 'G5R24', 'Tuco', 'Hierro', 'http://localhost:3000/Imgs/Gema.png', '120', '.'),
(86, 'Gema', 'G6yE3', 'Mexa', 'Diamante', 'http://localhost:3000/Imgs/Gema.png', '110', '.'),
(87, 'Gema', 'G72kE', 'Volto', 'Hierro', 'http://localhost:3000/Imgs/Gema.png', '70', '.'),
(88, 'Gema', 'G82D3', 'Tuco', 'Mallas', 'http://localhost:3000/Imgs/Gema.png', '130', '.'),
(89, 'Gema', 'G97nS', 'Hundi', 'Adamantium', 'http://localhost:3000/Imgs/Gema.png', '140', '.'),
(90, 'Gema', 'G0sSd', 'Zeka', 'Oro', 'http://localhost:3000/Imgs/Gema.png', '110', '.'),
(91, 'Casco', 'C1YW2', 'Mongo', 'Oro', 'http://localhost:3000/Imgs/Casco.png', '120', '.'),
(92, 'Casco', 'C2Wb4', 'Ruma', 'Diamante', 'http://localhost:3000/Imgs/Casco.png', '170', '.'),
(93, 'Casco', 'C34dc', 'Hundi', 'Platino', 'http://localhost:3000/Imgs/Casco.png', '100', '.'),
(94, 'Casco', 'C4Es2', 'Hundi', 'Diamante', 'http://localhost:3000/Imgs/Casco.png', '80', '.'),
(95, 'Casco', 'C5R24', 'Tuco', 'Hierro', 'http://localhost:3000/Imgs/Casco.png', '120', '.'),
(96, 'Casco', 'C6yE3', 'Mexa', 'Diamante', 'http://localhost:3000/Imgs/Casco.png', '110', '.'),
(97, 'Casco', 'C72kE', 'Volto', 'Oro', 'http://localhost:3000/Imgs/Casco.png', '70', '.'),
(98, 'Casco', 'C82D3', 'Tuco', 'Mallas', 'http://localhost:3000/Imgs/Casco.png', '130', '.'),
(99, 'Casco', 'C97nS', 'Hundi', 'Hierro', 'http://localhost:3000/Imgs/Casco.png', '140', '.'),
(100, 'Casco', 'C0sSd', 'Zeka', 'Oro', 'http://localhost:3000/Imgs/Casco.png', '110', '.'),
(101, 'Collar', 'N1YW2', 'Mongo', 'Cuero', 'http://localhost:3000/Imgs/Collar.png', '120', '.'),
(102, 'Collar', 'N2Wb4', 'Ruma', 'Diamante', 'http://localhost:3000/Imgs/Collar.png', '170', '.'),
(103, 'Collar', 'N34dc', 'Hundi', 'Platino', 'http://localhost:3000/Imgs/Collar.png', '100', '.'),
(104, 'Collar', 'N4Es2', 'Zeka', 'Cuero', 'http://localhost:3000/Imgs/Collar.png', '80', '.'),
(105, 'Collar', 'N5R24', 'Tuco', 'Hierro', 'http://localhost:3000/Imgs/Collar.png', '120', '.'),
(106, 'Collar', 'N6yE3', 'Mexa', 'Diamante', 'http://localhost:3000/Imgs/Collar.png', '110', '.'),
(107, 'Collar', 'N72kE', 'Volto', 'Hierro', 'http://localhost:3000/Imgs/Collar.png', '70', '.'),
(108, 'Collar', 'N82D3', 'Tuco', 'Mallas', 'http://localhost:3000/Imgs/Collar.png', '130', '.'),
(109, 'Collar', 'N97nS', 'Hundi', 'Adamantium', 'http://localhost:3000/Imgs/Collar.png', '140', '.'),
(110, 'Collar', 'N0sSd', 'Zeka', 'Oro', 'http://localhost:3000/Imgs/Collar.png', '110', '.'),
(111, 'Pantalones', 'S1YW2', 'Mongo', 'Oro', 'http://localhost:3000/Imgs/Pantalones.png', '120', '.'),
(112, 'Pantalones', 'S2Wb4', 'Ruma', 'Diamante', 'http://localhost:3000/Imgs/Pantalones.png', '170', '.'),
(113, 'Pantalones', 'S34dc', 'Hundi', 'Platino', 'http://localhost:3000/Imgs/Pantalones.png', '100', '.'),
(114, 'Pantalones', 'S4Es2', 'Hundi', 'Diamante', 'http://localhost:3000/Imgs/Pantalones.png', '80', '.'),
(115, 'Pantalones', 'S5R24', 'Tuco', 'Hierro', 'http://localhost:3000/Imgs/Pantalones.png', '120', '.'),
(116, 'Pantalones', 'S6yE3', 'Mexa', 'Diamante', 'http://localhost:3000/Imgs/Pantalones.png', '110', '.'),
(117, 'Pantalones', 'S72kE', 'Volto', 'Oro', 'http://localhost:3000/Imgs/Pantalones.png', '70', '.'),
(118, 'Pantalones', 'S82D3', 'Tuco', 'Mallas', 'http://localhost:3000/Imgs/Pantalones.png', '130', '.'),
(119, 'Pantalones', 'S97nS', 'Hundi', 'Adamantium', 'http://localhost:3000/Imgs/Pantalones.png', '140', '.'),
(120, 'Pantalones', 'S0sSd', 'Zeka', 'Oro', 'http://localhost:3000/Imgs/Pantalones.png', '110', '.'),
(121, 'Pecho', 'P1YW2', 'Mongo', 'Adamantium', 'http://localhost:3000/Imgs/Pecho.png', '120', '.'),
(122, 'Pecho', 'P2Wb4', 'Ruma', 'Diamante', 'http://localhost:3000/Imgs/Pecho.png', '170', '.'),
(123, 'Pecho', 'P34dc', 'Hundi', 'Platino', 'http://localhost:3000/Imgs/Pecho.png', '100', '.'),
(124, 'Pecho', 'P4Es2', 'Zeka', 'Cuero', 'http://localhost:3000/Imgs/Pecho.png', '80', '.'),
(125, 'Pecho', 'P5R24', 'Tuco', 'Hierro', 'http://localhost:3000/Imgs/Pecho.png', '120', '.'),
(126, 'Pecho', 'P6yE3', 'Mexa', 'Diamante', 'http://localhost:3000/Imgs/Pecho.png', '110', '.'),
(127, 'Pecho', 'P72kE', 'Volto', 'Hierro', 'http://localhost:3000/Imgs/Pecho.png', '70', '.'),
(128, 'Pecho', 'P82D3', 'Tuco', 'Mallas', 'http://localhost:3000/Imgs/Pecho.png', '130', '.'),
(129, 'Pecho', 'P97nS', 'Hundi', 'Adamantium', 'http://localhost:3000/Imgs/Pecho.png', '140', '.'),
(130, 'Pecho', 'P0sSd', 'Zeka', 'Oro', 'http://localhost:3000/Imgs/Pecho.png', '110', '.'),
(131, 'Capa', 'K1YW2', 'Mongo', 'Oro', 'http://localhost:3000/Imgs/Capa.png', '120', '.'),
(132, 'Capa', 'K2Wb4', 'Ruma', 'Diamante', 'http://localhost:3000/Imgs/Capa.png', '170', '.'),
(133, 'Capa', 'K34dc', 'Hundi', 'Platino', 'http://localhost:3000/Imgs/Capa.png', '100', '.'),
(134, 'Capa', 'K4Es2', 'Hundi', 'Diamante', 'http://localhost:3000/Imgs/Capa.png', '80', '.'),
(135, 'Capa', 'K5R24', 'Tuco', 'Hierro', 'http://localhost:3000/Imgs/Capa.png', '120', '.'),
(136, 'Capa', 'K6yE3', 'Mexa', 'Diamante', 'http://localhost:3000/Imgs/Capa.png', '110', '.'),
(137, 'Capa', 'K72kE', 'Volto', 'Cuero', 'http://localhost:3000/Imgs/Capa.png', '70', '.'),
(138, 'Capa', 'K82D3', 'Tuco', 'Mallas', 'http://localhost:3000/Imgs/Capa.png', '130', '.'),
(139, 'Capa', 'K97nS', 'Hundi', 'Adamantium', 'http://localhost:3000/Imgs/Capa.png', '140', '.'),
(140, 'Capa', 'K0sSd', 'Zeka', 'Oro', 'http://localhost:3000/Imgs/Capa.png', '110', '.'),
(141, 'Anillo', 'A1YW2', 'Mongo', 'Oro', 'http://localhost:3000/Imgs/Anillo.png', '120', '.'),
(142, 'Anillo', 'A2Wb4', 'Ruma', 'Diamante', 'http://localhost:3000/Imgs/Anillo.png', '170', '.'),
(143, 'Anillo', 'A34dc', 'Hundi', 'Platino', 'http://localhost:3000/Imgs/Anillo.png', '100', '.'),
(144, 'Anillo', 'A4Es2', 'Hundi', 'Diamante', 'http://localhost:3000/Imgs/Anillo.png', '80', '.'),
(145, 'Anillo', 'A5R24', 'Tuco', 'Hierro', 'http://localhost:3000/Imgs/Anillo.png', '120', '.'),
(146, 'Anillo', 'A6yE3', 'Mexa', 'Diamante', 'http://localhost:3000/Imgs/Anillo.png', '110', '.'),
(147, 'Anillo', 'A72kE', 'Volto', 'Oro', 'http://localhost:3000/Imgs/Anillo.png', '70', '.'),
(148, 'Anillo', 'A82D3', 'Tuco', 'Mallas', 'http://localhost:3000/Imgs/Anillo.png', '130', '.'),
(149, 'Anillo', 'A97nS', 'Hundi', 'Adamantium', 'http://localhost:3000/Imgs/Anillo.png', '140', '.'),
(150, 'Anillo', 'A0sSd', 'Zeka', 'Oro', 'http://localhost:3000/Imgs/Anillo.png', '110', '.'),
(151, 'Cinturon', 'B1YW2', 'Mongo', 'Oro', 'http://localhost:3000/Imgs/Cinturon.png', '120', '.'),
(152, 'Cinturon', 'B2Wb4', 'Ruma', 'Diamante', 'http://localhost:3000/Imgs/Cinturon.png', '170', '.'),
(153, 'Cinturon', 'B34dc', 'Hundi', 'Platino', 'http://localhost:3000/Imgs/Cinturon.png', '100', '.'),
(154, 'Cinturon', 'B4Es2', 'Hundi', 'Diamante', 'http://localhost:3000/Imgs/Cinturon.png', '80', '.'),
(155, 'Cinturon', 'B5R24', 'Tuco', 'Hierro', 'http://localhost:3000/Imgs/Cinturon.png', '120', '.'),
(156, 'Cinturon', 'B6yE3', 'Mexa', 'Diamante', 'http://localhost:3000/Imgs/Cinturon.png', '110', '.'),
(157, 'Cinturon', 'B72kE', 'Volto', 'Oro', 'http://localhost:3000/Imgs/Cinturon.png', '70', '.'),
(158, 'Cinturon', 'B82D3', 'Tuco', 'Mallas', 'http://localhost:3000/Imgs/Cinturon.png', '130', '.'),
(159, 'Cinturon', 'B97nS', 'Hundi', 'Adamantium', 'http://localhost:3000/Imgs/Cinturon.png', '140', '.'),
(160, 'Cinturon', 'B0sSd', 'Zeka', 'Oro', 'http://localhost:3000/Imgs/Cinturon.png', '110', '.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `Id` int(18) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=161;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
