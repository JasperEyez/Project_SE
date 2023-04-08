-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 08, 2023 at 05:03 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `starzon`
--

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `order_id` int(11) NOT NULL,
  `order_name` varchar(300) NOT NULL,
  `order_details` varchar(500) NOT NULL,
  `order_price` int(11) NOT NULL,
  `order_type` varchar(100) NOT NULL,
  `order_pic` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`order_id`, `order_name`, `order_details`, `order_price`, `order_type`, `order_pic`) VALUES
(1, 'Caffe Latte', 'Our dark, Rich in flavour espresso balanced with steamed milk and a light layer of foam. A perfect coffee warm up.', 113, 'drink', 'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/100377.webp'),
(2, 'Cappuccino', 'Dark, Rich in flavour espresso lies in wait under a smoothed and stretched layer of thick foam. It\'s truly the height of our baristas\' craft.', 113, 'drink', 'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/100419.webp'),
(3, 'Double Mocha Latte', 'A blend of mocha sauce with our Signature Starbucks® espresso roast and steamed milk, topped with caramel cold brew whipped cream and mocha sauce drizzle.', 160, 'drink', 'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/113684.webp'),
(4, 'Caffe Americano', 'Rich in flavour, full-bodied espresso with hot water in true European style.', 105, 'drink', 'https://starbucks-cdn-01.s3.ap-south-1.amazonaws.com/Items/Large/webP/100433.webp');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`order_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
