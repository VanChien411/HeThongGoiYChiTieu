-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th3 30, 2023 lúc 11:19 AM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `quanlychitieunckh`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `actions`
--

CREATE TABLE `actions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double NOT NULL,
  `gains` tinyint(1) NOT NULL,
  `datetime` datetime NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `actions`
--

INSERT INTO `actions` (`id`, `name`, `price`, `gains`, `datetime`, `user_id`) VALUES
(40, 'Banh mi', 12, 0, '2023-02-08 00:00:00', 18),
(41, 'Quỹ 100', 100, 0, '2023-02-08 00:00:00', 18),
(42, 'Trai cay', 15, 0, '2023-02-08 00:00:00', 18),
(43, 'Tien nhà', 100, 0, '2023-02-08 00:00:00', 18),
(45, 'Ngoài giờ', 13, 0, '2023-02-11 11:44:26', 18),
(46, 'Tien qua', 50, 1, '2023-02-11 18:07:19', 4),
(47, 'Tien tet', 100, 1, '2023-02-11 18:24:10', 18),
(48, 'Ăn quà', 10, 0, '2023-02-11 18:24:35', 18),
(49, 'Nạp lần 1', 12, 1, '2023-02-11 18:27:07', 18),
(50, 'Mua xam', 3, 0, '2023-02-11 00:00:00', 18),
(51, 'Ăn sáng', 11, 0, '2023-02-08 00:00:00', 18),
(54, 'Gato', 20, 0, '2023-02-08 00:00:00', 18),
(55, 'Gato', 1, 0, '2023-02-09 00:00:00', 18),
(59, 'Ăn sáng', 2, 0, '2023-02-09 00:00:00', 18),
(63, 'Ăn sáng', 4, 0, '2023-02-10 00:00:00', 18),
(65, 'Tien nhà', 232, 0, '2023-02-10 00:00:00', 18),
(68, 'Ăn sáng', 30, 0, '2023-02-13 00:00:00', 18),
(69, 'Ăn sáng', 20, 0, '2023-02-14 00:00:00', 18),
(70, 'Ăn sáng', 10, 0, '2023-02-15 00:00:00', 18),
(71, 'Ăn sáng', 20, 0, '2023-02-16 00:00:00', 18),
(72, 'Banh mi', 10, 0, '2023-02-13 00:00:00', 18),
(73, 'Banh mi', 20, 0, '2023-02-14 00:00:00', 18),
(74, 'Banh mi', 10, 0, '2023-02-15 00:00:00', 18),
(75, 'Banh mi', 15, 0, '2023-02-16 00:00:00', 18),
(76, 'Cà phê', 10, 0, '2023-02-13 00:00:00', 18),
(77, 'Cà phê', 10, 0, '2023-02-14 00:00:00', 18),
(78, 'Cà phê', 20, 0, '2023-02-15 00:00:00', 18),
(79, 'Cà phê', 30, 0, '2023-02-16 00:00:00', 18),
(80, 'Phí di chuyển', 15, 0, '2023-02-13 00:00:00', 18),
(81, 'Phí di chuyển', 15, 0, '2023-02-14 00:00:00', 18),
(82, 'Phí di chuyển', 15, 0, '2023-02-15 00:00:00', 18),
(83, 'Phí di chuyển', 15, 0, '2023-02-16 00:00:00', 18),
(84, 'Du lịch', 200, 0, '2023-02-13 00:00:00', 18),
(85, 'Lương thưởng', 1000, 1, '2023-02-16 21:16:59', 18),
(86, 'Lương thưởng', 10, 1, '2023-02-16 21:18:11', 18),
(87, 'Mua vé số', 30, 0, '2023-02-16 21:19:46', 18),
(88, 'Mua vé số', 10, 0, '2023-02-16 21:21:46', 18),
(89, 'Học bổng', 10000, 1, '2023-02-19 20:12:03', 18);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `active_fixeds`
--

CREATE TABLE `active_fixeds` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double NOT NULL,
  `table_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `active_fixeds`
--

INSERT INTO `active_fixeds` (`id`, `name`, `price`, `table_id`, `user_id`) VALUES
(179, 'Ăn sáng', 400, 1, 18),
(180, 'Banh mi', 100, 1, 18),
(181, 'Cà phê', 200, 1, 18),
(182, 'Phí di chuyển', 300, 1, 18),
(183, 'Du lịch', 700, 2, 18),
(184, 'Mua xe mô hình', 400, 2, 18),
(185, 'Tien nhà', 1000, 3, 18),
(186, 'Tiền học', 3000, 3, 18);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(10, '2022_11_16_083659_create_roles_table', 2),
(11, '2022_11_16_084552_create_role_user_table', 2),
(13, '2022_11_16_085015_create_table_types_table', 2),
(15, '2022_11_16_084731_create_active_fixeds_table', 3),
(16, '2022_11_16_093312_create_actions_table', 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `role_user`
--

CREATE TABLE `role_user` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `role_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `table_types`
--

CREATE TABLE `table_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rank` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `table_types`
--

INSERT INTO `table_types` (`id`, `name`, `rank`) VALUES
(1, 'SinhHoat', 1),
(2, 'TiepKiem', 2),
(3, 'BatBuoc', 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `_state` tinyint(1) DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `is_superuser` tinyint(1) DEFAULT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_passwords` tinyint(1) DEFAULT NULL,
  `date_joined` datetime NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `takeget_password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `access_type` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `_state`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `remember_passwords`, `date_joined`, `email_verified_at`, `takeget_password`, `avatar`, `access_type`) VALUES
(4, 1, '111111', '2022-11-10 02:14:41', 0, 'wer werwe 23 ew', 'ew', 'wer werwe 23', 'phuthienchien3@gmail.com', NULL, '2022-11-10 02:14:41', NULL, NULL, 'image/user.png', NULL),
(5, 1, '111111', '2022-11-10 02:15:56', 0, 'wer werwe 23 ew', 'ew', 'wer werwe 23', 'phuthienchien2@gmail.com', NULL, '2022-11-10 02:15:56', NULL, NULL, NULL, NULL),
(7, 1, 'false1', '2022-11-10 02:21:57', 0, 'wer werwe 23 ew', 'ew', 'wer werwe 23', 'phuthienchien0@gmail.com', NULL, '2022-11-10 02:21:57', NULL, NULL, NULL, NULL),
(8, 1, '1111111', '2022-11-10 02:22:45', 0, 'wer werwe 23 ew', 'ew', 'wer werwe 23', 'user1@gmail.com', NULL, '2022-11-10 02:22:45', NULL, NULL, NULL, NULL),
(9, 1, '111111', '2022-11-10 02:23:34', 0, 'wer werwe 23 ew', 'ew', 'wer werwe 23', 'user2@gmail.com', NULL, '2022-11-10 02:23:34', NULL, NULL, NULL, NULL),
(14, 1, '111111', '2022-11-14 14:19:07', 0, ' ', '', '', 'phuthienchien4@gmail.com', NULL, '2022-11-14 14:19:07', NULL, NULL, NULL, NULL),
(15, 1, '111111', '2022-11-14 14:21:31', 0, 'Lê Văn Chi', 'Chi', 'Lê Văn', 'phuthienchien5@gmail.com', NULL, '2022-11-14 14:21:31', NULL, NULL, NULL, NULL),
(16, 1, '111111', '2022-11-14 15:44:42', 0, 'Lê          Văn Chiến', 'Chiến', 'Lê          Văn', 'phuthienchien6@gmail.com', NULL, '2022-11-14 15:44:42', NULL, NULL, NULL, NULL),
(17, 1, '111111', '2022-11-14 15:57:19', 0, 'Lê Văn Chiến', 'Chiến', 'Lê Văn', 'phuthienchien7@gmail.com', NULL, '2022-11-14 15:57:19', NULL, NULL, NULL, NULL),
(18, 1, '111111', '2022-11-15 13:23:37', 0, 'wer werwe 23 ew', 'ew', 'wer werwe 23', 'phuthienchien8@gmail.com', NULL, '2022-11-15 13:23:37', NULL, NULL, 'image/user.png', NULL),
(19, 1, '111111', '2022-11-15 13:24:06', 0, 'wer werwe 23 ew', 'ew', 'wer werwe 23', 'phuthienchien9@gmail.com', NULL, '2022-11-15 13:24:06', NULL, NULL, 'image/user.png', NULL),
(23, 1, NULL, '2022-11-16 14:02:39', 0, 'Chiến Lê Văn', 'Văn', 'Chiến Lê', '2051010032chien@ou.edu.vn', NULL, '2022-11-16 14:02:39', NULL, NULL, 'https://lh3.googleusercontent.com/a/ALm5wu15Wcdyvbe8Z507APj-1zTv0lIjmakElZNsLYrA=s96-c', 2);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `actions`
--
ALTER TABLE `actions`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `active_fixeds`
--
ALTER TABLE `active_fixeds`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Chỉ mục cho bảng `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `role_user`
--
ALTER TABLE `role_user`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `table_types`
--
ALTER TABLE `table_types`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `actions`
--
ALTER TABLE `actions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT cho bảng `active_fixeds`
--
ALTER TABLE `active_fixeds`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=187;

--
-- AUTO_INCREMENT cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `role_user`
--
ALTER TABLE `role_user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `table_types`
--
ALTER TABLE `table_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
