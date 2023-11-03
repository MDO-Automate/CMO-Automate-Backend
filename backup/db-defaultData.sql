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
