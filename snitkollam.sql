-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2023 at 04:41 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `snitkollam`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminauthentication`
--

CREATE TABLE `adminauthentication` (
  `admin_id` int(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adminauthentication`
--

INSERT INTO `adminauthentication` (`admin_id`, `email`, `password`) VALUES
(1, 'mca@gmail.com', 'mca');

-- --------------------------------------------------------

--
-- Table structure for table `eventcategory`
--

CREATE TABLE `eventcategory` (
  `event_id` int(10) NOT NULL,
  `eventName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `eventcategory`
--

INSERT INTO `eventcategory` (`event_id`, `eventName`) VALUES
(13, 'Womens day'),
(14, 'Food Fest '),
(15, 'Exhibition');

-- --------------------------------------------------------

--
-- Table structure for table `eventgallery`
--

CREATE TABLE `eventgallery` (
  `gallery_id` int(10) NOT NULL,
  `event_id` int(20) NOT NULL,
  `eventPic` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `eventgallery`
--

INSERT INTO `eventgallery` (`gallery_id`, `event_id`, `eventPic`) VALUES
(22, 13, 'uploadImage/425597840.jpg'),
(23, 13, 'uploadImage/477867158.jpg'),
(24, 13, 'uploadImage/752712246.jpg'),
(25, 13, 'uploadImage/1992108043.jpg'),
(27, 13, 'uploadImage/1444359612.jpg'),
(28, 13, 'uploadImage/1598068280.jpg'),
(29, 13, 'uploadImage/247838615.jpg'),
(31, 13, 'uploadImage/326578438.jpg'),
(32, 13, 'uploadImage/1160591336.jpg'),
(33, 13, 'uploadImage/1751150123.jpg'),
(34, 13, 'uploadImage/2036498477.jpg'),
(35, 13, 'uploadImage/264332042.jpg'),
(36, 13, 'uploadImage/849682682.jpg'),
(37, 13, 'uploadImage/1151707660.jpg'),
(38, 13, 'uploadImage/1149544965.jpg'),
(39, 13, 'uploadImage/1128204573.jpg'),
(41, 13, 'uploadImage/151550558.jpg'),
(42, 13, 'uploadImage/328064365.jpg'),
(43, 13, 'uploadImage/2114148196.jpg'),
(44, 13, 'uploadImage/812250630.jpg'),
(45, 15, 'uploadImage/197930339.jpg'),
(46, 15, 'uploadImage/1597473808.jpg'),
(47, 15, 'uploadImage/1328986089.jpg'),
(48, 15, 'uploadImage/345854848.jpg'),
(49, 15, 'uploadImage/112112516.jpg'),
(50, 15, 'uploadImage/251942179.jpg'),
(51, 15, 'uploadImage/1461414498.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminauthentication`
--
ALTER TABLE `adminauthentication`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `eventcategory`
--
ALTER TABLE `eventcategory`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `eventgallery`
--
ALTER TABLE `eventgallery`
  ADD PRIMARY KEY (`gallery_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adminauthentication`
--
ALTER TABLE `adminauthentication`
  MODIFY `admin_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `eventcategory`
--
ALTER TABLE `eventcategory`
  MODIFY `event_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `eventgallery`
--
ALTER TABLE `eventgallery`
  MODIFY `gallery_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
