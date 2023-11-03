USE [CMO_Prueba]
GO
SET IDENTITY_INSERT [dbo].[itinerario] ON 

INSERT [dbo].[itinerario] ([id], [nombre]) VALUES (1, N'01')
INSERT [dbo].[itinerario] ([id], [nombre]) VALUES (2, N'02')
INSERT [dbo].[itinerario] ([id], [nombre]) VALUES (3, N'03')
INSERT [dbo].[itinerario] ([id], [nombre]) VALUES (4, N'04')
INSERT [dbo].[itinerario] ([id], [nombre]) VALUES (5, N'05')
INSERT [dbo].[itinerario] ([id], [nombre]) VALUES (6, N'06')
INSERT [dbo].[itinerario] ([id], [nombre]) VALUES (7, N'00')
SET IDENTITY_INSERT [dbo].[itinerario] OFF
GO
SET IDENTITY_INSERT [dbo].[ruta] ON 

INSERT [dbo].[ruta] ([id], [nombre], [kmItinerario1], [kmItinerarioRepro1], [kmItinerario2], [kmItinerarioRepro2], [kmItinerario3], [kmItinerarioRepro3], [kmItinerario4], [kmItinerarioRepro4], [inicioHabil], [inicioSabado], [inicioDomingo], [finHabil], [finSabado], [finDomingo], [itinerario1], [itinerario2], [itinerario3], [itinerario4]) VALUES (4,  N'3001', 6573, 7073, 6981, 7481, 0, 0, 0, 0, CAST(N'03:53:00' AS Time), CAST(N'03:55:00' AS Time), CAST(N'04:30:00' AS Time), CAST(N'23:30:00' AS Time), CAST(N'23:30:00' AS Time), CAST(N'23:50:00' AS Time), 4, 5, 7, 7)
INSERT [dbo].[ruta] ([id], [nombre], [kmItinerario1], [kmItinerarioRepro1], [kmItinerario2], [kmItinerarioRepro2], [kmItinerario3], [kmItinerarioRepro3], [kmItinerario4], [kmItinerarioRepro4], [inicioHabil], [inicioSabado], [inicioDomingo], [finHabil], [finSabado], [finDomingo], [itinerario1], [itinerario2], [itinerario3], [itinerario4]) VALUES (8,  N'3001-A', 4946, 5446, 4445, 4945, 0, 0, 0, 0, CAST(N'04:05:00' AS Time), CAST(N'04:10:00' AS Time), CAST(N'04:40:00' AS Time), CAST(N'23:30:00' AS Time), CAST(N'23:30:00' AS Time), CAST(N'22:46:00' AS Time), 1, 2, 7, 7)
INSERT [dbo].[ruta] ([id], [nombre], [kmItinerario1], [kmItinerarioRepro1], [kmItinerario2], [kmItinerarioRepro2], [kmItinerario3], [kmItinerarioRepro3], [kmItinerario4], [kmItinerarioRepro4], [inicioHabil], [inicioSabado], [inicioDomingo], [finHabil], [finSabado], [finDomingo], [itinerario1], [itinerario2], [itinerario3], [itinerario4]) VALUES (9,  N'3002', 7525, 8025, 7137, 7637, 0, 0, 0, 0, CAST(N'03:50:00' AS Time), CAST(N'03:50:00' AS Time), CAST(N'04:29:00' AS Time), CAST(N'23:25:00' AS Time), CAST(N'23:25:00' AS Time), CAST(N'22:50:00' AS Time), 1, 2, 7, 7)
INSERT [dbo].[ruta] ([id], [nombre], [kmItinerario1], [kmItinerarioRepro1], [kmItinerario2], [kmItinerarioRepro2], [kmItinerario3], [kmItinerarioRepro3], [kmItinerario4], [kmItinerarioRepro4], [inicioHabil], [inicioSabado], [inicioDomingo], [finHabil], [finSabado], [finDomingo], [itinerario1], [itinerario2], [itinerario3], [itinerario4]) VALUES (10, N'3003M', 5661, 6161, 6030, 6530, 0, 0, 0, 0, CAST(N'03:55:00' AS Time), CAST(N'03:45:00' AS Time), CAST(N'04:20:00' AS Time), CAST(N'23:35:00' AS Time), CAST(N'23:35:00' AS Time), CAST(N'22:40:00' AS Time), 1, 2, 7, 7)
INSERT [dbo].[ruta] ([id], [nombre], [kmItinerario1], [kmItinerarioRepro1], [kmItinerario2], [kmItinerarioRepro2], [kmItinerario3], [kmItinerarioRepro3], [kmItinerario4], [kmItinerarioRepro4], [inicioHabil], [inicioSabado], [inicioDomingo], [finHabil], [finSabado], [finDomingo], [itinerario1], [itinerario2], [itinerario3], [itinerario4]) VALUES (11, N'3003P', 6481, 6981, 6181, 6681, 7971, 8471, 7741, 8241, CAST(N'03:40:00' AS Time), CAST(N'03:45:00' AS Time), CAST(N'04:15:00' AS Time), CAST(N'23:35:00' AS Time), CAST(N'23:35:00' AS Time), CAST(N'23:00:00' AS Time), 1, 2, 3, 4)
INSERT [dbo].[ruta] ([id], [nombre], [kmItinerario1], [kmItinerarioRepro1], [kmItinerario2], [kmItinerarioRepro2], [kmItinerario3], [kmItinerarioRepro3], [kmItinerario4], [kmItinerarioRepro4], [inicioHabil], [inicioSabado], [inicioDomingo], [finHabil], [finSabado], [finDomingo], [itinerario1], [itinerario2], [itinerario3], [itinerario4]) VALUES (14, N'3003RA', 4569, 5069, 4351, 4851, 4804, 5304, 4763, 5263, CAST(N'03:50:00' AS Time), CAST(N'03:50:00' AS Time), CAST(N'04:25:00' AS Time), CAST(N'23:35:00' AS Time), CAST(N'23:35:00' AS Time), CAST(N'23:00:00' AS Time), 3, 4, 5, 6)
INSERT [dbo].[ruta] ([id], [nombre], [kmItinerario1], [kmItinerarioRepro1], [kmItinerario2], [kmItinerarioRepro2], [kmItinerario3], [kmItinerarioRepro3], [kmItinerario4], [kmItinerarioRepro4], [inicioHabil], [inicioSabado], [inicioDomingo], [finHabil], [finSabado], [finDomingo], [itinerario1], [itinerario2], [itinerario3], [itinerario4]) VALUES (16, N'3003RLC', 4000, 4500, 3811, 4311, 0, 0, 0, 0, CAST(N'03:46:00' AS Time), CAST(N'03:48:00' AS Time), CAST(N'04:20:00' AS Time), CAST(N'23:30:00' AS Time), CAST(N'23:30:00' AS Time), CAST(N'23:00:00' AS Time), 1, 2, 7, 7)
INSERT [dbo].[ruta] ([id], [nombre], [kmItinerario1], [kmItinerarioRepro1], [kmItinerario2], [kmItinerarioRepro2], [kmItinerario3], [kmItinerarioRepro3], [kmItinerario4], [kmItinerarioRepro4], [inicioHabil], [inicioSabado], [inicioDomingo], [finHabil], [finSabado], [finDomingo], [itinerario1], [itinerario2], [itinerario3], [itinerario4]) VALUES (17, N'3003RV', 4906, 5406, 4829, 5329, 9716, 10216, 0, 0, CAST(N'03:57:00' AS Time), CAST(N'03:57:00' AS Time), CAST(N'04:33:00' AS Time), CAST(N'23:20:00' AS Time), CAST(N'23:20:00' AS Time), CAST(N'22:40:00' AS Time), 3, 4, 5, 7)
INSERT [dbo].[ruta] ([id], [nombre], [kmItinerario1], [kmItinerarioRepro1], [kmItinerario2], [kmItinerarioRepro2], [kmItinerario3], [kmItinerarioRepro3], [kmItinerario4], [kmItinerarioRepro4], [inicioHabil], [inicioSabado], [inicioDomingo], [finHabil], [finSabado], [finDomingo], [itinerario1], [itinerario2], [itinerario3], [itinerario4]) VALUES (18, N'3004B', 6491, 6991, 5256, 5756, 0, 0, 0, 0, CAST(N'03:45:00' AS Time), CAST(N'03:45:00' AS Time), CAST(N'04:07:00' AS Time), CAST(N'23:40:00' AS Time), CAST(N'23:40:00' AS Time), CAST(N'23:05:00' AS Time), 1, 2, 7, 7)
INSERT [dbo].[ruta] ([id], [nombre], [kmItinerario1], [kmItinerarioRepro1], [kmItinerario2], [kmItinerarioRepro2], [kmItinerario3], [kmItinerarioRepro3], [kmItinerario4], [kmItinerarioRepro4], [inicioHabil], [inicioSabado], [inicioDomingo], [finHabil], [finSabado], [finDomingo], [itinerario1], [itinerario2], [itinerario3], [itinerario4]) VALUES (20, N'3004P', 6018, 6518, 4768, 5268, 0, 0, 0, 0, CAST(N'03:45:00' AS Time), CAST(N'03:45:00' AS Time), CAST(N'04:07:00' AS Time), CAST(N'23:40:00' AS Time), CAST(N'23:40:00' AS Time), CAST(N'23:05:00' AS Time), 1, 2, 7, 7)
INSERT [dbo].[ruta] ([id], [nombre], [kmItinerario1], [kmItinerarioRepro1], [kmItinerario2], [kmItinerarioRepro2], [kmItinerario3], [kmItinerarioRepro3], [kmItinerario4], [kmItinerarioRepro4], [inicioHabil], [inicioSabado], [inicioDomingo], [finHabil], [finSabado], [finDomingo], [itinerario1], [itinerario2], [itinerario3], [itinerario4]) VALUES (21, N'3005', 5230, 5730, 5190, 5690, 0, 0, 0, 0, CAST(N'03:45:00' AS Time), CAST(N'03:40:00' AS Time), CAST(N'04:12:00' AS Time), CAST(N'23:40:00' AS Time), CAST(N'23:40:00' AS Time), CAST(N'23:05:00' AS Time), 1, 2, 7, 7)
INSERT [dbo].[ruta] ([id], [nombre], [kmItinerario1], [kmItinerarioRepro1], [kmItinerario2], [kmItinerarioRepro2], [kmItinerario3], [kmItinerarioRepro3], [kmItinerario4], [kmItinerarioRepro4], [inicioHabil], [inicioSabado], [inicioDomingo], [finHabil], [finSabado], [finDomingo], [itinerario1], [itinerario2], [itinerario3], [itinerario4]) VALUES (22, N'3006', 0, 0, 4219, 4719, 0, 0, 0, 0, CAST(N'04:05:00' AS Time), CAST(N'04:05:00' AS Time), CAST(N'04:35:00' AS Time), CAST(N'23:40:00' AS Time), CAST(N'23:40:00' AS Time), CAST(N'22:40:00' AS Time), 7, 2, 7, 7)
INSERT [dbo].[ruta] ([id], [nombre], [kmItinerario1], [kmItinerarioRepro1], [kmItinerario2], [kmItinerarioRepro2], [kmItinerario3], [kmItinerarioRepro3], [kmItinerario4], [kmItinerarioRepro4], [inicioHabil], [inicioSabado], [inicioDomingo], [finHabil], [finSabado], [finDomingo], [itinerario1], [itinerario2], [itinerario3], [itinerario4]) VALUES (23, N'3007', 0, 0, 3585, 4085, 4196, 4696, 0, 0, CAST(N'03:55:00' AS Time), CAST(N'03:55:00' AS Time), CAST(N'04:20:00' AS Time), CAST(N'23:35:00' AS Time), CAST(N'23:35:00' AS Time), CAST(N'23:02:00' AS Time), 2, 3, 7, 7)
INSERT [dbo].[ruta] ([id], [nombre], [kmItinerario1], [kmItinerarioRepro1], [kmItinerario2], [kmItinerarioRepro2], [kmItinerario3], [kmItinerarioRepro3], [kmItinerario4], [kmItinerarioRepro4], [inicioHabil], [inicioSabado], [inicioDomingo], [finHabil], [finSabado], [finDomingo], [itinerario1], [itinerario2], [itinerario3], [itinerario4]) VALUES (24, N'3007A', 0, 0, 2797, 3297, 3724, 4224, 0, 0, CAST(N'03:55:00' AS Time), CAST(N'03:55:00' AS Time), CAST(N'04:25:00' AS Time), CAST(N'23:40:00' AS Time), CAST(N'23:40:00' AS Time), CAST(N'23:00:00' AS Time), 2, 3, 1, 7)
INSERT [dbo].[ruta] ([id], [nombre], [kmItinerario1], [kmItinerarioRepro1], [kmItinerario2], [kmItinerarioRepro2], [kmItinerario3], [kmItinerarioRepro3], [kmItinerario4], [kmItinerarioRepro4], [inicioHabil], [inicioSabado], [inicioDomingo], [finHabil], [finSabado], [finDomingo], [itinerario1], [itinerario2], [itinerario3], [itinerario4]) VALUES (26, N'3008', 4299, 4799, 3953, 4453, 0, 0, 0, 0, CAST(N'03:55:00' AS Time), CAST(N'03:55:00' AS Time), CAST(N'04:30:00' AS Time), CAST(N'23:30:00' AS Time), CAST(N'23:30:00' AS Time), CAST(N'23:00:00' AS Time), 1, 2, 7, 7)
SET IDENTITY_INSERT [dbo].[ruta] OFF
GO
SET IDENTITY_INSERT [dbo].[criterio] ON 

INSERT [dbo].[criterio] ([id], [nombre], [campo]) VALUES (1, N'Distancias <  500', N'minor500')
INSERT [dbo].[criterio] ([id], [nombre], [campo]) VALUES (2, N'Distancia <  Media y  Paradas > 99%', N'distanciaYMedia')
INSERT [dbo].[criterio] ([id], [nombre], [campo]) VALUES (3, N'Distancias >  0 y Paradas < 5%', N'distanciaYParadas')
INSERT [dbo].[criterio] ([id], [nombre], [campo]) VALUES (5, N'Fuera de horario', N'fueraHorario')
SET IDENTITY_INSERT [dbo].[criterio] OFF
GO


USE [CMO_Prueba]
GO
SET IDENTITY_INSERT [dbo].[circulacion] ON 

INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (2, 101, 4)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (4, 102, 4)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (5, 103, 4)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (6, 104, 4)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (7, 105, 4)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (8, 106, 4)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (9, 107, 4)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (10, 108, 4)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (11, 109, 4)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (12, 110, 4)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (13, 111, 4)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (14, 112, 4)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (15, 113, 4)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (16, 141, 8)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (17, 142, 8)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (18, 143, 8)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (19, 144, 8)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (20, 145, 8)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (21, 201, 9)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (22, 202, 9)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (23, 203, 9)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (24, 204, 9)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (25, 205, 9)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (26, 206, 9)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (27, 207, 9)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (28, 208, 9)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (29, 209, 9)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (30, 210, 9)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (31, 211, 9)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (32, 212, 9)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (33, 213, 9)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (34, 214, 9)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (35, 215, 9)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (36, 216, 9)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (37, 217, 9)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (38, 218, 9)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (39, 301, 10)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (40, 302, 10)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (41, 303, 10)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (42, 304, 10)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (43, 305, 10)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (44, 306, 10)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (45, 307, 10)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (46, 308, 10)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (47, 309, 10)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (48, 310, 10)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (49, 311, 10)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (50, 312, 10)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (51, 313, 10)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (52, 341, 11)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (53, 342, 11)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (54, 343, 11)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (55, 344, 11)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (56, 345, 11)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (57, 346, 11)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (58, 347, 11)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (59, 348, 11)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (60, 349, 11)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (61, 350, 11)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (62, 361, 14)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (63, 362, 14)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (64, 363, 14)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (65, 364, 14)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (66, 365, 14)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (67, 381, 16)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (68, 382, 16)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (69, 383, 16)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (70, 384, 16)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (71, 385, 16)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (72, 386, 16)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (73, 371, 17)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (74, 372, 17)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (75, 373, 17)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (76, 374, 17)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (77, 375, 17)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (78, 401, 18)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (79, 402, 18)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (80, 403, 18)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (81, 404, 18)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (82, 405, 18)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (83, 406, 18)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (84, 407, 18)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (85, 408, 18)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (86, 409, 18)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (87, 410, 18)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (88, 451, 20)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (89, 452, 20)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (90, 453, 20)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (91, 454, 20)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (92, 455, 20)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (93, 456, 20)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (94, 457, 20)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (95, 458, 20)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (96, 459, 20)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (97, 460, 20)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (98, 461, 20)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (99, 462, 20)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (100, 501, 21)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (101, 502, 21)
GO
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (102, 503, 21)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (103, 504, 21)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (104, 505, 21)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (105, 506, 21)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (106, 507, 21)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (107, 508, 21)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (108, 509, 21)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (109, 510, 21)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (110, 511, 21)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (111, 512, 21)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (112, 601, 22)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (113, 602, 22)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (114, 603, 22)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (115, 604, 22)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (116, 701, 23)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (117, 702, 23)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (118, 703, 23)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (119, 704, 23)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (120, 741, 24)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (121, 742, 24)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (122, 743, 24)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (123, 744, 24)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (124, 801, 26)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (125, 802, 26)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (126, 803, 26)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (127, 804, 26)
INSERT [dbo].[circulacion] ([id], [circulacion], [linea]) VALUES (128, 805, 26)
SET IDENTITY_INSERT [dbo].[circulacion] OFF
GO


INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (11, N'CAB - INT', CAST(N'03:50:00' AS Time), CAST(N'23:05:00' AS Time), CAST(N'03:49:00' AS Time), CAST(N'23:05:00' AS Time), CAST(N'04:22:00' AS Time), CAST(N'22:19:00' AS Time), 10, 1)
GO
INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (12, N'INT - CAB', CAST(N'04:14:00' AS Time), CAST(N'23:34:00' AS Time), CAST(N'04:14:00' AS Time), CAST(N'23:30:00' AS Time), CAST(N'04:46:00' AS Time), CAST(N'22:19:00' AS Time), 10, 2)
GO
INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (13, N'INT - CAB', CAST(N'04:14:00' AS Time), CAST(N'23:33:00' AS Time), CAST(N'04:14:00' AS Time), CAST(N'23:35:00' AS Time), CAST(N'04:44:00' AS Time), CAST(N'22:45:00' AS Time), 11, 1)
GO
INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (14, N'CAB - INT', CAST(N'03:46:00' AS Time), CAST(N'23:04:00' AS Time), CAST(N'03:52:00' AS Time), CAST(N'23:04:00' AS Time), CAST(N'04:21:00' AS Time), CAST(N'22:20:00' AS Time), 11, 2)
GO
INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (15, N'INT - CAB', CAST(N'04:14:00' AS Time), CAST(N'23:33:00' AS Time), CAST(N'04:14:00' AS Time), CAST(N'23:35:00' AS Time), CAST(N'04:47:00' AS Time), CAST(N'22:45:00' AS Time), 14, 5)
GO
INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (16, N'CAB - INT', CAST(N'03:56:00' AS Time), CAST(N'23:15:00' AS Time), CAST(N'03:55:00' AS Time), CAST(N'23:12:00' AS Time), CAST(N'04:28:00' AS Time), CAST(N'22:25:00' AS Time), 14, 6)
GO
INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (17, N'INT - CAB', CAST(N'04:16:00' AS Time), CAST(N'23:31:00' AS Time), CAST(N'04:14:00' AS Time), CAST(N'23:28:00' AS Time), CAST(N'04:45:00' AS Time), CAST(N'22:45:00' AS Time), 16, 1)
GO
INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (18, N'CAB - INT', CAST(N'03:56:00' AS Time), CAST(N'23:10:00' AS Time), CAST(N'03:51:00' AS Time), CAST(N'23:08:00' AS Time), CAST(N'04:29:00' AS Time), CAST(N'22:26:00' AS Time), 16, 2)
GO
INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (19, N'CIRCULAR', CAST(N'03:55:00' AS Time), CAST(N'23:33:00' AS Time), CAST(N'03:52:00' AS Time), CAST(N'23:36:00' AS Time), CAST(N'04:26:00' AS Time), CAST(N'22:45:00' AS Time), 17, 3)
GO
INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (20, N'CAB - INT', CAST(N'03:45:00' AS Time), CAST(N'23:10:00' AS Time), CAST(N'03:48:00' AS Time), CAST(N'23:04:00' AS Time), CAST(N'04:22:00' AS Time), CAST(N'22:27:00' AS Time), 18, 1)
GO
INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (21, N'INT - CAB', CAST(N'04:05:00' AS Time), CAST(N'23:35:00' AS Time), CAST(N'04:10:00' AS Time), CAST(N'23:32:00' AS Time), CAST(N'04:41:00' AS Time), CAST(N'22:48:00' AS Time), 18, 2)
GO
INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (22, N'CAB - INT', CAST(N'03:48:00' AS Time), CAST(N'23:06:00' AS Time), CAST(N'03:47:00' AS Time), CAST(N'23:09:00' AS Time), CAST(N'04:20:00' AS Time), CAST(N'22:25:00' AS Time), 20, 1)
GO
INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (23, N'INT - CAB', CAST(N'04:09:00' AS Time), CAST(N'23:35:00' AS Time), CAST(N'04:10:00' AS Time), CAST(N'23:32:00' AS Time), CAST(N'04:41:00' AS Time), CAST(N'22:48:00' AS Time), 20, 2)
GO
INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (25, N'CAB - INT', CAST(N'03:45:00' AS Time), CAST(N'23:15:00' AS Time), CAST(N'03:47:00' AS Time), CAST(N'23:12:00' AS Time), CAST(N'04:17:00' AS Time), CAST(N'22:21:00' AS Time), 21, 1)
GO
INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (27, N'INT - CAB', CAST(N'04:00:00' AS Time), CAST(N'23:40:00' AS Time), CAST(N'04:00:00' AS Time), CAST(N'23:29:00' AS Time), CAST(N'04:40:00' AS Time), CAST(N'22:47:00' AS Time), 21, 2)
GO
INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (30, N'N/A', CAST(N'05:08:00' AS Time), CAST(N'17:31:00' AS Time), CAST(N'00:00:00' AS Time), CAST(N'00:00:00' AS Time), CAST(N'00:00:00' AS Time), CAST(N'00:00:00' AS Time), 21, 3)
GO
INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (31, N'N/A', CAST(N'05:38:00' AS Time), CAST(N'18:01:00' AS Time), CAST(N'00:00:00' AS Time), CAST(N'00:00:00' AS Time), CAST(N'00:00:00' AS Time), CAST(N'00:00:00' AS Time), 21, 4)
GO
INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (32, N'CIRCULAR', CAST(N'03:46:00' AS Time), CAST(N'23:43:00' AS Time), CAST(N'03:41:00' AS Time), CAST(N'23:39:00' AS Time), CAST(N'04:16:00' AS Time), CAST(N'22:47:00' AS Time), 22, 2)
GO
INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (33, N'INT - CAB', CAST(N'04:15:00' AS Time), CAST(N'23:33:00' AS Time), CAST(N'04:12:00' AS Time), CAST(N'23:30:00' AS Time), CAST(N'04:43:00' AS Time), CAST(N'22:47:00' AS Time), 23, 2)
GO
INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (34, N'CAB - INT', CAST(N'03:58:00' AS Time), CAST(N'23:13:00' AS Time), CAST(N'03:56:00' AS Time), CAST(N'23:08:00' AS Time), CAST(N'04:29:00' AS Time), CAST(N'22:31:00' AS Time), 23, 3)
GO
INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (35, N'INT - CAB', CAST(N'04:16:00' AS Time), CAST(N'23:33:00' AS Time), CAST(N'04:12:00' AS Time), CAST(N'23:30:00' AS Time), CAST(N'04:44:00' AS Time), CAST(N'22:47:00' AS Time), 24, 2)
GO
INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (36, N'CAB - INT', CAST(N'04:01:00' AS Time), CAST(N'23:20:00' AS Time), CAST(N'03:59:00' AS Time), CAST(N'23:14:00' AS Time), CAST(N'04:31:00' AS Time), CAST(N'22:31:00' AS Time), 24, 3)
GO
INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (37, N'INT - CAB', CAST(N'04:25:00' AS Time), CAST(N'23:25:00' AS Time), CAST(N'04:17:00' AS Time), CAST(N'23:25:00' AS Time), CAST(N'04:52:00' AS Time), CAST(N'22:43:00' AS Time), 26, 1)
GO
INSERT [dbo].[horarios_iitinerario] ([id], [sentido], [lvInicio], [lvFin], [sInicio], [sFin], [dInicio], [dFin], [linea], [itinerario]) VALUES (38, N'CAB - INT', CAST(N'04:02:00' AS Time), CAST(N'23:03:00' AS Time), CAST(N'03:58:00' AS Time), CAST(N'23:01:00' AS Time), CAST(N'04:35:00' AS Time), CAST(N'22:27:00' AS Time), 26, 2)
GO
SET IDENTITY_INSERT [dbo].[horarios_iitinerario] OFF
GO