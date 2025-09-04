-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 28, 2024 at 03:24 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `schoolsoftware`
--

-- --------------------------------------------------------

--
-- Table structure for table `about_us`
--

CREATE TABLE `about_us` (
  `about_us_id` int(11) NOT NULL,
  `about_info` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about_us`
--

INSERT INTO `about_us` (`about_us_id`, `about_info`) VALUES
(1, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum beatae dolore pariatur consequuntur veniam reprehenderit perspiciatis, sit praesentium est deleniti fuga itaque, voluptates debitis non repellat, distinctio amet numquam hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure voluptatum corrupti magnam aliquid voluptatem odit, repellat, rem necessitatibus neque odio, suscipit perspiciatis optio. Iure laudantium excepturi tenetur odio distinctio deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur laboriosam ut, totam, iure dolorem voluptatem.\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `admin_register`
--

CREATE TABLE `admin_register` (
  `admin_register_id` int(11) NOT NULL,
  `admin_name` text DEFAULT NULL,
  `admin_mobile` text DEFAULT NULL,
  `admin_email` text DEFAULT NULL,
  `admin_password` text DEFAULT NULL,
  `admin_user_id` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin_register`
--

INSERT INTO `admin_register` (`admin_register_id`, `admin_name`, `admin_mobile`, `admin_email`, `admin_password`, `admin_user_id`) VALUES
(1, 'Viraj Dhakanne', '9876543210', 'dhakaneviraj0@gmail.com', '123456', 'admin@123');

-- --------------------------------------------------------

--
-- Table structure for table `alumini`
--

CREATE TABLE `alumini` (
  `alumini_id` int(11) NOT NULL,
  `alumini_img` text DEFAULT NULL,
  `alumini_name` varchar(100) DEFAULT NULL,
  `alumini_std` varchar(50) DEFAULT NULL,
  `alumini_percent` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alumini`
--

INSERT INTO `alumini` (`alumini_id`, `alumini_img`, `alumini_name`, `alumini_std`, `alumini_percent`) VALUES
(4, '1720760245951.png', 'kunal Arora', '10th', '92'),
(5, '1720760287106.png', 'Srushti Khapra', '10th', '93.89'),
(6, '1720760318179.png', 'Champ Roy', '10th', '96.95'),
(7, '1720760360817.png', 'Joy Reddi', '10th', '98.78'),
(8, '1720761262215.png', 'Guddu Rathod', '10th', '91');

-- --------------------------------------------------------

--
-- Table structure for table `card`
--

CREATE TABLE `card` (
  `card_id` int(11) NOT NULL,
  `card_img` text DEFAULT NULL,
  `card_title` text DEFAULT NULL,
  `card_descrip` text DEFAULT NULL,
  `card_link` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `card`
--

INSERT INTO `card` (`card_id`, `card_img`, `card_title`, `card_descrip`, `card_link`) VALUES
(1, '1720418698860.png', 'Thinking Based Learning Implementes ', '                                                                                                                                                                                                                                How to Choose the Right Stream after 10th Board Exam Results.\r\nAfter your 10th Board Exams, choosing the appropriate stream has lorem oor lore\r\n\r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               \r\n               ', '/thinking_based_learnin'),
(2, '1720418752132.png', 'Works on Students Intelligence ', '                                How to Choose the Right Stream after 10th Board Exam Results.\r\nAfter your 10th Board Exams, choosing the appropriate stream has lorem oor lorem.\r\n               \r\n               ', '/choose_the_right_stream'),
(3, '1720418790476.png', 'Design-Based Learnings', '                How to Choose the Right Stream after 10th Board Exam Results.\r\n                    After your 10th Board Exams, choosing the appropriate stream has lorem oor lorem.\r\n               ', '/digital_based'),
(4, '1720418833929.png', 'Gamification in Learning', 'How to Choose the Right Stream after 10th Board Exam Results.\r\n                    After your 10th Board Exams, choosing the appropriate stream has lorem oor lorem.', '/gamification'),
(5, '1720418862718.png', 'Tips & Practises', 'Tips & Practises For Parents On Self-Disciplining Children.', '/tipspractices'),
(6, '1720418893908.png', 'Problem-Based Learning', 'How to Choose the Right Stream after 10th Board Exam Results.\r\n                    After your 10th Board Exams, choosing the appropriate stream has lorem oor lorem.', '/practicebased');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `contact_id` int(11) NOT NULL,
  `first_con_no` varchar(20) DEFAULT NULL,
  `sec_con_no` varchar(20) DEFAULT NULL,
  `fir_mail_id` varchar(30) DEFAULT NULL,
  `sec_mail_id` varchar(30) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `address2` text NOT NULL,
  `g_map_link` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`contact_id`, `first_con_no`, `sec_con_no`, `fir_mail_id`, `sec_mail_id`, `address`, `address2`, `g_map_link`) VALUES
(1, '9823976255', '9421833069', 'harshbaid024@gmail.com ', 'ganesh@g.c', 'rabhaji nagar', 'kedgaon ahilyanagar', 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3770.7928326684823!2d74.70055607425165!3d19.0728440520735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDA0JzIyLjIiTiA3NMKwNDInMTEuMyJF!5e0!3m2!1sen!2sin!4v1719988438166!5m2!1sen!2sin');

-- --------------------------------------------------------

--
-- Table structure for table `contactform`
--

CREATE TABLE `contactform` (
  `contactform_id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `subject` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `mobile_no` varchar(20) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contactform`
--

INSERT INTO `contactform` (`contactform_id`, `name`, `subject`, `email`, `mobile_no`, `message`, `date`) VALUES
(1, 'vishal nikrad', 'math ', 'vishal@gmail.com', '8208302202', 'i want to join classses ', '03-07-2024'),
(2, 'harsh', 'tuition fees', 'harsh@gmail.com', '989283928', 'i want to know fee structure', '03-07-202417:10 PM'),
(3, 'hello', 'hello', 'hello@gmail.com', '567890', 'ghjkl', '03-07-202417:11 PM'),
(4, 'ghj', 'ghj', 'gh@s.x', '56789', 'ghjk', '03-07-2024 17:13 PM'),
(5, 'HARSH BAID', 'Admission process Enquiry', 'harshbaid@gmail.com', '09834677113', 'Admission process Enquiry Admission process Enquiry Admission process Enquiry ', '05-07-2024 15:40 PM'),
(6, 'sarthank', 'admission', 'sarthak@gmail.com', '87654', 'waiting', '25-07-2024 19:47 PM'),
(7, 'priya', 'take admission', 'piya@gmail', '56789', 'admission', '04-08-2024 21:41 PM');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `department_id` int(11) NOT NULL,
  `department_text` text DEFAULT NULL,
  `department_img` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`department_id`, `department_text`, `department_img`) VALUES
(4, 'Principal Office ', '1720696419321.png'),
(5, 'Admission Department', '1720696442667.png'),
(6, 'Classroom', '1720696460274.png'),
(7, 'Department Library', '1720696485816.png'),
(8, 'Computer Department', '1720696510476.png'),
(9, 'Sport Department', '1720696527737.png'),
(10, 'Teachers Staff Room', '1720696564469.png'),
(11, 'Conference Hall ', '1720696585230.png'),
(13, 'Auditorium', '1720696767474.png');

-- --------------------------------------------------------

--
-- Table structure for table `education_management_qty`
--

CREATE TABLE `education_management_qty` (
  `education_management_qty_id` int(11) NOT NULL,
  `education_name` text DEFAULT NULL,
  `education_img` text DEFAULT NULL,
  `education_des` text DEFAULT NULL,
  `management_name` text DEFAULT NULL,
  `management_img` text DEFAULT NULL,
  `management_des` text DEFAULT NULL,
  `qty_name` text DEFAULT NULL,
  `qty_img` text DEFAULT NULL,
  `qty_des` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `education_management_qty`
--

INSERT INTO `education_management_qty` (`education_management_qty_id`, `education_name`, `education_img`, `education_des`, `management_name`, `management_img`, `management_des`, `qty_name`, `qty_img`, `qty_des`) VALUES
(1, 'Best Education', '1720592531236images-of-nature-4.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Top Management', '1720592531291images-of-nature-4.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Quality Meeting', '1720592531300images-of-nature-4.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

-- --------------------------------------------------------

--
-- Table structure for table `faq_det`
--

CREATE TABLE `faq_det` (
  `FAQ_det_id` int(11) NOT NULL,
  `faq_name` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faq_det`
--

INSERT INTO `faq_det` (`FAQ_det_id`, `faq_name`) VALUES
(2, 'Lorem ipsum dolor sit amet consectetur adipisicing elit.\r\nLorem ipsum dolor sit, amet consectetur adipisicing elit. At sint corporis quidem mollitia. Optio nobis vitae cupiditate ipsum sint voluptatem.'),
(3, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At sint corporis quidem mollitia. Optio nobis vitae cupiditate ipsum sint voluptatem.'),
(4, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At sint corporis quidem mollitia. Optio nobis vitae cupiditate ipsum sint voluptatem.'),
(5, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At sint corporis quidem mollitia. Optio nobis vitae cupiditate ipsum sint voluptatem.');

-- --------------------------------------------------------

--
-- Table structure for table `hero_slider`
--

CREATE TABLE `hero_slider` (
  `hero_slider_id` int(11) NOT NULL,
  `slider_name` text DEFAULT NULL,
  `slider_des` text DEFAULT NULL,
  `slider_img` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hero_slider`
--

INSERT INTO `hero_slider` (`hero_slider_id`, `slider_name`, `slider_des`, `slider_img`) VALUES
(2, 'MISSION', '1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna anime. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut farhan ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum daily web design nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '1720588782217639799.jpg'),
(4, 'MISSION', '1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna anime. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut farhan ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum daily web design nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '172059018755736316.jpg'),
(5, 'MISSION', '1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna anime. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut farhan ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum daily web design nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '1720590200665nature-hd-sd.jpg'),
(6, 'MISSION', '1Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna anime. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut farhan ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum daily web design nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', '1720590213182Nature___Seasons___Spring_Beautiful_Nature_Landscape_in_spring_065897_.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `important_links`
--

CREATE TABLE `important_links` (
  `important_links_id` int(11) NOT NULL,
  `School_ERP_link` text DEFAULT NULL,
  `College_ERP_link` text DEFAULT NULL,
  `University_ERP_link` text DEFAULT NULL,
  `Learning_Management_link` text DEFAULT NULL,
  `Marketing_Services_link` text DEFAULT NULL,
  `FAQ_link` text DEFAULT NULL,
  `Career_link` text DEFAULT NULL,
  `Teachers_Login` text DEFAULT NULL,
  `Become_Partner_link` text DEFAULT NULL,
  `About_Us_link` text DEFAULT NULL,
  `Testimonials_link` text DEFAULT NULL,
  `Privacy_Policy_link` text DEFAULT NULL,
  `Terms_Conditions_link` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `important_links`
--

INSERT INTO `important_links` (`important_links_id`, `School_ERP_link`, `College_ERP_link`, `University_ERP_link`, `Learning_Management_link`, `Marketing_Services_link`, `FAQ_link`, `Career_link`, `Teachers_Login`, `Become_Partner_link`, `About_Us_link`, `Testimonials_link`, `Privacy_Policy_link`, `Terms_Conditions_link`) VALUES
(1, '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#');

-- --------------------------------------------------------

--
-- Table structure for table `notic_board`
--

CREATE TABLE `notic_board` (
  `notic_board_id` int(11) NOT NULL,
  `notice_title` text DEFAULT NULL,
  `notice_subtitle` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notic_board`
--

INSERT INTO `notic_board` (`notic_board_id`, `notice_title`, `notice_subtitle`) VALUES
(4, 'HOUSE CULTURAL COMPITATION	', 'Lorem ipsum dolor sit amet, Itaque quibusdam rerum eveniet adipisci saepe blanditiis?'),
(5, 'HOUSE CULTURAL COMPITATION	', 'Lorem ipsum dolor sit amet, Itaque quibusdam rerum eveniet adipisci saepe blanditiis?'),
(6, 'HOUSE CULTURAL COMPITATION	', 'Lorem ipsum dolor sit amet, Itaque quibusdam rerum eveniet adipisci saepe blanditiis?'),
(7, 'HOUSE CULTURAL COMPITATION1', 'Lorem ipsum dolor sit amet, Itaque quibusdam rerum eveniet adipisci saepe blanditiis?');

-- --------------------------------------------------------

--
-- Table structure for table `parent_registration`
--

CREATE TABLE `parent_registration` (
  `parent_id` int(11) NOT NULL,
  `parent_username` varchar(200) DEFAULT NULL,
  `parent_mobile` int(11) DEFAULT NULL,
  `parent_email` varchar(300) DEFAULT NULL,
  `parent_std_identity` int(11) DEFAULT NULL,
  `parent_password` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `parent_registration`
--

INSERT INTO `parent_registration` (`parent_id`, `parent_username`, `parent_mobile`, `parent_email`, `parent_std_identity`, `parent_password`) VALUES
(1, 'Hemant Kedare', 2147483647, 'hemant@gmail.com', 1, '123456'),
(5, '', 0, '', 0, ''),
(6, '', 0, '', 0, ''),
(7, '', 0, '', 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `principal_message`
--

CREATE TABLE `principal_message` (
  `principal_message_id` int(11) NOT NULL,
  `principal_photo` text DEFAULT NULL,
  `principal_name` text DEFAULT NULL,
  `principal_post` text DEFAULT NULL,
  `principal_par1` text DEFAULT NULL,
  `principal_par2` text DEFAULT NULL,
  `principal_par3` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `principal_message`
--

INSERT INTO `principal_message` (`principal_message_id`, `principal_photo`, `principal_name`, `principal_post`, `principal_par1`, `principal_par2`, `principal_par3`) VALUES
(1, '1720010513633acfaprincipal.jpg', 'Prof.V.D.Kale', 'PRINCIPAL', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque commodi exercitationem vero quo veritatis et. Totam repellat molestiae autem veritatis. Reiciendis nesciunt optio quis, blanditiis numquam ex magnam praesentium? Veritatis.', 'We are here to serve you next level tutorial that currently in trend to match you with your expertise. Css3 transition is a learning website. where you can find many good quality content related to web development and tutorials about plugins. here we are using html,', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis sequi placeat id delectus nobis ab hic esse quae vitae? Quod quae error autem atque eveniet!');

-- --------------------------------------------------------

--
-- Table structure for table `recent_events`
--

CREATE TABLE `recent_events` (
  `recent_events_id` int(11) NOT NULL,
  `events_name` text DEFAULT NULL,
  `events_img` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recent_events`
--

INSERT INTO `recent_events` (`recent_events_id`, `events_name`, `events_img`) VALUES
(6, 'CHEMESTRY', '1720086924249629638268-H-1024x700.webp'),
(9, 'SPORT DAYS', '17201621502741.jpeg'),
(10, 'REPUBLIC DAY', '17201621749182.jpg'),
(11, 'ANNUAL DAY', '17201621993173.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `social_links`
--

CREATE TABLE `social_links` (
  `social_links_id` int(11) NOT NULL,
  `main_logo` text DEFAULT NULL,
  `twiter_link` text DEFAULT NULL,
  `facebook_link` text DEFAULT NULL,
  `youtube_link` text DEFAULT NULL,
  `google_link` text DEFAULT NULL,
  `school_contact` text DEFAULT NULL,
  `linkedin_link` text DEFAULT NULL,
  `insta_link` text DEFAULT NULL,
  `school_email` text DEFAULT NULL,
  `school_time` text DEFAULT NULL,
  `school_address` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `social_links`
--

INSERT INTO `social_links` (`social_links_id`, `main_logo`, `twiter_link`, `facebook_link`, `youtube_link`, `google_link`, `school_contact`, `linkedin_link`, `insta_link`, `school_email`, `school_time`, `school_address`) VALUES
(1, '1720507029446images.png', '#', '#', '#', 'google.com', '9823976255', '#', '#', 'info@skolaro.com', '9AM to 9 PM Monday to Saturday Palm Court, 7th Floor, Industrial', 'Development Area, Sector 16, Gurugram, Haryana 122001');

-- --------------------------------------------------------

--
-- Table structure for table `std_admission`
--

CREATE TABLE `std_admission` (
  `admission_no` int(11) NOT NULL,
  `aca_year` varchar(50) NOT NULL,
  `student_id` int(11) DEFAULT NULL,
  `stud_class` varchar(20) NOT NULL,
  `admfull_first` varchar(100) NOT NULL,
  `admfull_middle` varchar(100) NOT NULL,
  `admfull_last` varchar(100) NOT NULL,
  `admfull_mobile` varchar(100) NOT NULL,
  `admfull_email` varchar(100) DEFAULT NULL,
  `admfull_aadhar_no` varchar(50) NOT NULL,
  `adm_localaddress` varchar(200) DEFAULT NULL,
  `adm_permentaddress` varchar(200) DEFAULT NULL,
  `adm_country` varchar(50) DEFAULT NULL,
  `adm_state` varchar(50) DEFAULT NULL,
  `adm_city` varchar(50) DEFAULT NULL,
  `adm_village` varchar(50) DEFAULT NULL,
  `adm_pincode` varchar(50) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `adm_bloodg` varchar(50) NOT NULL,
  `adm_birth_date` varchar(50) DEFAULT NULL,
  `adm_birht_place` varchar(50) DEFAULT NULL,
  `adm_prev_class` varchar(50) DEFAULT NULL,
  `adm_lastyear_percent` varchar(50) DEFAULT NULL,
  `adm_religion` varchar(50) DEFAULT NULL,
  `adm_cat_caste` varchar(50) DEFAULT NULL,
  `adm_caste` varchar(50) DEFAULT NULL,
  `adm_minority` varchar(50) DEFAULT NULL,
  `payment_mode` varchar(20) NOT NULL,
  `dateTime` varchar(100) NOT NULL,
  `razorpay_payment_id` varchar(50) NOT NULL,
  `transactionDateTime` varchar(50) NOT NULL,
  `adm_approval` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `std_admission`
--

INSERT INTO `std_admission` (`admission_no`, `aca_year`, `student_id`, `stud_class`, `admfull_first`, `admfull_middle`, `admfull_last`, `admfull_mobile`, `admfull_email`, `admfull_aadhar_no`, `adm_localaddress`, `adm_permentaddress`, `adm_country`, `adm_state`, `adm_city`, `adm_village`, `adm_pincode`, `gender`, `adm_bloodg`, `adm_birth_date`, `adm_birht_place`, `adm_prev_class`, `adm_lastyear_percent`, `adm_religion`, `adm_cat_caste`, `adm_caste`, `adm_minority`, `payment_mode`, `dateTime`, `razorpay_payment_id`, `transactionDateTime`, `adm_approval`) VALUES
(11, '2024-2025', 13, '5th', 'rohan', 'raju', 'dhumal', '9823976256', 'rohan@gmail.com', '786743902030', 'NAGAR KEDGAON', 'NAGAR KEDGAON', 'IN', 'MH', 'Ahmednagar', 'KEDGAON', '414005', 'male', 'B+', '2001-08-22', 'KEDGAON', '4th', '90', 'hinduism', 'general', 'maratha', 'none', 'online', '', 'pay_Ohtuq9oTys6M7m', '07/08/2024, 11:23', 'approved'),
(12, '2024-2025', 15, '5th', 'ganesh', 'ganesh', 'kadam', '9823976255', 'kadamg367637@gmail.com', '892298237744', 'kedgaon a.nagar', 'kedgaon a.nagar', 'IN', 'MH', 'Ahmednagar', 'kedgaon', '414005', 'male', 'B+', '2001-08-22', 'adgav', '4th', '34', 'hinduism', 'general', 'maratha', 'none', 'online', '', 'pay_OhwrdDWt8ZrePE', '07/08/2024, 14:16', 'rejected');

-- --------------------------------------------------------

--
-- Table structure for table `student_feedback`
--

CREATE TABLE `student_feedback` (
  `student_feedback_id` int(11) NOT NULL,
  `top_des` text DEFAULT NULL,
  `student_name` text DEFAULT NULL,
  `student_photo` text DEFAULT NULL,
  `student_feedback` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student_feedback`
--

INSERT INTO `student_feedback` (`student_feedback_id`, `top_des`, `student_name`, `student_photo`, `student_feedback`) VALUES
(1, 'There are many variations of passages of Lorem Ipsum available, but the majority hThere are many variations of passages of Lorem Ipsum available, but the majority h', 'Ritika Sharma', '1720608170220images (3).jpeg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

-- --------------------------------------------------------

--
-- Table structure for table `student_registration`
--

CREATE TABLE `student_registration` (
  `student_id` int(11) NOT NULL,
  `std_username` varchar(200) DEFAULT NULL,
  `std_mobile` text NOT NULL,
  `std_email` varchar(200) DEFAULT NULL,
  `std_password` text DEFAULT NULL,
  `std_confipassword` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student_registration`
--

INSERT INTO `student_registration` (`student_id`, `std_username`, `std_mobile`, `std_email`, `std_password`, `std_confipassword`) VALUES
(13, 'rohan dhumal', '9823976256', 'rohan@gmail.com', 'Rohan@123', 'Rohan@123'),
(15, 'Ganesh kadam', '9823976255', 'kadamg367637@gmail.com', 'Ganesh@123', 'Ganesh@123'),
(16, 'vishal nikrad', '8208308300', 'vishal@gmail.com', 'Vishal@123', 'Vishal@123'),
(17, 'raju tambe', '8734303430', 'raju@gmai.com', 'Raju12@g', 'Raju12@g'),
(18, 'hema rah ', '9030903032', 'hema@gmail.com', 'Hema@123', 'Hema@123');

-- --------------------------------------------------------

--
-- Table structure for table `teacher_info`
--

CREATE TABLE `teacher_info` (
  `teacher_info_id` int(11) NOT NULL,
  `teacher_photo` text DEFAULT NULL,
  `teacher_name` text DEFAULT NULL,
  `teacher_qul` text DEFAULT NULL,
  `teacher_id` text DEFAULT NULL,
  `teacher_mobile` text DEFAULT NULL,
  `teacher_email` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teacher_info`
--

INSERT INTO `teacher_info` (`teacher_info_id`, `teacher_photo`, `teacher_name`, `teacher_qul`, `teacher_id`, `teacher_mobile`, `teacher_email`) VALUES
(3, '1720161772762istockphoto-1289489554-612x612.jpg', 'Dr. R.J. Sheetal ', 'Msc(Chemistry)	', 'ID 547211	', '+91 8694756395	', 'sheetal@gmail.com'),
(4, '1720161795665istockphoto-1289489554-612x612.jpg', 'Dr. R.J.Kale', 'Msc(Chemistry)', 'ID 547211', '+91 8694756395', 'abcd@gmail.com'),
(5, '1720161836757istockphoto-1289489554-612x612.jpg', 'Dr. R.J.Kale', 'Msc(Chemistry)', 'ID 547211', '+91 8694756395', 'abcd@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `teacher_registration`
--

CREATE TABLE `teacher_registration` (
  `teacher_id` int(11) NOT NULL,
  `teacher_name` varchar(200) DEFAULT NULL,
  `teacher_phone` varchar(15) DEFAULT NULL,
  `teacher_email` varchar(200) DEFAULT NULL,
  `teacher_identity` varchar(100) DEFAULT NULL,
  `teacher_class` text DEFAULT NULL,
  `teacher_subject` varchar(100) DEFAULT NULL,
  `teacher_linkedin` text NOT NULL,
  `teacher_birthday` text NOT NULL,
  `teacher_gender` text NOT NULL,
  `teacher_password` text DEFAULT NULL,
  `teacher_aboutus` text NOT NULL,
  `teacher_address` text DEFAULT NULL,
  `teacher_photo` text NOT NULL,
  `teacher_signatures` text NOT NULL,
  `iAgree` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teacher_registration`
--

INSERT INTO `teacher_registration` (`teacher_id`, `teacher_name`, `teacher_phone`, `teacher_email`, `teacher_identity`, `teacher_class`, `teacher_subject`, `teacher_linkedin`, `teacher_birthday`, `teacher_gender`, `teacher_password`, `teacher_aboutus`, `teacher_address`, `teacher_photo`, `teacher_signatures`, `iAgree`) VALUES
(6, 'BAID HARSH', '9876543214', 'harshbaid@gmail.com', 'ISB0000006', 'Class 10', 'Geometry', 'https://www.linkedin.com/mynetwork/grow/', '1998-05-08', 'Male', '123456', 'HARDWORKING HARDWORKHARDWORKING HARDWORKING HARDWORKING HARDWORKING HARDWORKING ING HARDWORKING ', 'EME COLONEY BHINGAR BHINGAR AHMEDNAGAR', '1721114502799harsh.jfif', '1721114502800draw-e-signature.png', ''),
(7, 'BAID HARSH', '9876543214', 'harshbaid@gmail.com', 'ISB0000006', 'Class 10', 'Geometry', 'https://www.linkedin.com/mynetwork/grow/', '1998-05-08', 'Male', '123456', 'HARDWORKING HARDWORKHARDWORKING HARDWORKING HARDWORKING HARDWORKING HARDWORKING ING HARDWORKING ', 'EME COLONEY BHINGAR BHINGAR AHMEDNAGAR', '1721114648028harsh.jfif', '1721114648029draw-e-signature.png', ''),
(8, 'HARSH BAID', '09834677113', 'harshbaid@gmail.com', 'ISB1234567', 'Class 11', 'Science', 'https://www.linkedin.com/mynetwork/grow/', '9488-05-04', 'Male', '123456', 'hd', 'EME COLONEY BHINGAR BHINGAR AHMEDNAGAR', '1721114718602vishal.jpg', '1721114718603draw-e-signature.png', ''),
(9, 'jfkljfa', '75757', 'harshbaid@gmail.com', 'ISB0000004', 'Class 9', 'Chemistry', 'https://www.linkedin.com/mynetwork/grow/', '1997-06-08', 'Male', '123456', 'hardqorking', 'BALIKASHRAM ROAD NEAR A2Z IT HUBBALIKASHRAM ROAD NEAR A2Z IT HUB SUDKE MALLA', '1721114798140teacher.jpg', '1721114798140draw-e-signature.png', ''),
(10, 'ROHAN DHUMAL', '08308172315', 'rohan@gmail.com', 'ISB0000006', 'Class 11', 'Geometry', 'https://www.linkedin.com/mynetwork/grow/', '0878-06-19', 'Male', '123456', 'jfjf', 'BALIKASHRAM ROAD NEAR A2Z IT HUBALIKASHRAM ROAD NEAR A2Z IT HUB SUDKE MALLA', '1721114862027ganesh.jfif', '1721114862028draw-e-signature.png', '');

-- --------------------------------------------------------

--
-- Table structure for table `youtube_links`
--

CREATE TABLE `youtube_links` (
  `youtube_links_id` int(11) NOT NULL,
  `video_link1` text DEFAULT NULL,
  `video_link2` text DEFAULT NULL,
  `video_link3` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `youtube_links`
--

INSERT INTO `youtube_links` (`youtube_links_id`, `video_link1`, `video_link2`, `video_link3`) VALUES
(1, 'https://youtu.be/5mr7AdmjSdc?feature=shared', 'https://youtu.be/5mr7AdmjSdc?feature=shared', 'https://youtu.be/5mr7AdmjSdc?feature=shared'),
(3, 'https://youtu.be/5mr7AdmjSdc?feature=shared', 'https://youtu.be/5mr7AdmjSdc?feature=shared', 'https://youtu.be/5mr7AdmjSdc?feature=shared');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about_us`
--
ALTER TABLE `about_us`
  ADD PRIMARY KEY (`about_us_id`);

--
-- Indexes for table `admin_register`
--
ALTER TABLE `admin_register`
  ADD PRIMARY KEY (`admin_register_id`),
  ADD UNIQUE KEY `admin_register_id` (`admin_register_id`);

--
-- Indexes for table `alumini`
--
ALTER TABLE `alumini`
  ADD PRIMARY KEY (`alumini_id`);

--
-- Indexes for table `card`
--
ALTER TABLE `card`
  ADD PRIMARY KEY (`card_id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`contact_id`);

--
-- Indexes for table `contactform`
--
ALTER TABLE `contactform`
  ADD PRIMARY KEY (`contactform_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`department_id`);

--
-- Indexes for table `notic_board`
--
ALTER TABLE `notic_board`
  ADD PRIMARY KEY (`notic_board_id`);

--
-- Indexes for table `parent_registration`
--
ALTER TABLE `parent_registration`
  ADD PRIMARY KEY (`parent_id`);

--
-- Indexes for table `principal_message`
--
ALTER TABLE `principal_message`
  ADD PRIMARY KEY (`principal_message_id`);

--
-- Indexes for table `recent_events`
--
ALTER TABLE `recent_events`
  ADD PRIMARY KEY (`recent_events_id`);

--
-- Indexes for table `std_admission`
--
ALTER TABLE `std_admission`
  ADD PRIMARY KEY (`admission_no`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `student_registration`
--
ALTER TABLE `student_registration`
  ADD PRIMARY KEY (`student_id`);

--
-- Indexes for table `teacher_info`
--
ALTER TABLE `teacher_info`
  ADD PRIMARY KEY (`teacher_info_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about_us`
--
ALTER TABLE `about_us`
  MODIFY `about_us_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `admin_register`
--
ALTER TABLE `admin_register`
  MODIFY `admin_register_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `alumini`
--
ALTER TABLE `alumini`
  MODIFY `alumini_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `card`
--
ALTER TABLE `card`
  MODIFY `card_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `contact_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contactform`
--
ALTER TABLE `contactform`
  MODIFY `contactform_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `department_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `notic_board`
--
ALTER TABLE `notic_board`
  MODIFY `notic_board_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `parent_registration`
--
ALTER TABLE `parent_registration`
  MODIFY `parent_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `principal_message`
--
ALTER TABLE `principal_message`
  MODIFY `principal_message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recent_events`
--
ALTER TABLE `recent_events`
  MODIFY `recent_events_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `std_admission`
--
ALTER TABLE `std_admission`
  MODIFY `admission_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `student_registration`
--
ALTER TABLE `student_registration`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `teacher_info`
--
ALTER TABLE `teacher_info`
  MODIFY `teacher_info_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `std_admission`
--
ALTER TABLE `std_admission`
  ADD CONSTRAINT `std_admission_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student_registration` (`student_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
