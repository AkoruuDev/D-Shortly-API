--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    "userId" integer NOT NULL,
    token text NOT NULL
);


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: viwers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.viwers (
    "userId" integer NOT NULL,
    "urlId" integer NOT NULL,
    viwers integer DEFAULT 1 NOT NULL
);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (1, 24, 'https://www.youtube.com/watch?v=yxq0ZnjEENs', 'oGiuuWO_Q9', '2022-12-22');
INSERT INTO public.urls VALUES (2, 24, 'https://www.youtube.com/watch?v=yPWGWk4F38E', 'oEOiehFKip', '2022-12-22');
INSERT INTO public.urls VALUES (3, 24, 'https://www.youtube.com/watch?v=0NxFHMV6Das', 'bOjIGxoQgR', '2022-12-22');
INSERT INTO public.urls VALUES (4, 3, 'https://www.youtube.com/watch?v=GwckzsDf3z8', 'Td4wZZ27gl', '2022-12-22');
INSERT INTO public.urls VALUES (5, 3, 'https://www.youtube.com/watch?v=r_kn_8Vh3I8', 'tZzBFUOAnn', '2022-12-22');
INSERT INTO public.urls VALUES (6, 6, 'https://www.youtube.com/watch?v=W-t0LxHdS_s', 'v-1xWYsz7v', '2022-12-22');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Ana Maria', 'a@gut.com', '$2b$10$bOH5Ux5fh3sCsFYR7h24L.7kmntBZrS.rIk573vDNNV1wzb33zNQW');
INSERT INTO public.users VALUES (2, 'Bruno Alencar', 'b@gut.com', '$2b$10$xrsMj3WtuB3JPw8XG2NkK.2GbsUQVtZiW0HxeUz1pG5X/RN7asFwy');
INSERT INTO public.users VALUES (3, 'Carlos Almirante', 'c@gut.com', '$2b$10$IarM/0va3k4IKyuqG995zuBT4LlTUZn2uRJr/4mCmDARXwiVfc4qS');
INSERT INTO public.users VALUES (4, 'Diane Sul', 'd@gut.com', '$2b$10$5hlV4amcjOvblTp9HvfD9OcCO3NpZ7JLsJ9o4bffDOjJAPw2xquRW');
INSERT INTO public.users VALUES (5, 'Efraim Mesquito', 'e@gut.com', '$2b$10$zvUXoMqoy7HBEg7jCHyb.eGLFYSU0AlSGpCBjV9ivZVRdIyHIADXa');
INSERT INTO public.users VALUES (6, 'Fábio Junior', 'f@gut.com', '$2b$10$fdfpnngTp5NElJKgMSCc7.TQ0orjdvbz.CHHl1K5jDRfi4ZgfZUF2');
INSERT INTO public.users VALUES (7, 'Gregory Santana', 'g@gut.com', '$2b$10$a7ijo/kO97F4.iwhmJ025emXxtJmhum34b4ZcssoZVQvMGdxxOe6O');
INSERT INTO public.users VALUES (8, 'Helem Maria', 'h@gut.com', '$2b$10$zR7vreinV2Ryy/83Dwd9JuRtuy3zhucuRZX/BR.eqCFwJ42WZjJA6');
INSERT INTO public.users VALUES (9, 'Igor Sena', 'i@gut.com', '$2b$10$/Cu8uOqKY7h9nWpQcIOzpedrEJQOeT4dPQLx0jSY4MYDR.EwfuSzS');
INSERT INTO public.users VALUES (10, 'Jeferson Silva', 'j@gut.com', '$2b$10$PbwB/3qge5GxExmI1xNLAe1MwDZfYck7hXV/8DcJ/sEU4iCSPvmoK');
INSERT INTO public.users VALUES (11, 'Kaylane Rodrigues', 'k@gut.com', '$2b$10$J9kuI6r2/Eag28/BkzsjE.NLWbrKI9uPJkS.4al4hRCyY7/HZwYOG');
INSERT INTO public.users VALUES (12, 'Laercio Beiramar', 'l@gut.com', '$2b$10$LrAJlo967mr5uVCd6ammwOmGTfWY1lIez/W.rU7IOmEcul/uIczg2');
INSERT INTO public.users VALUES (13, 'Meria Lourdes', 'm@gut.com', '$2b$10$7QrHdYrarDEMYAlzsbN.IOdojA1zHqEWDUbop2XldFqj3PQZAcOg6');
INSERT INTO public.users VALUES (14, 'Nelson Padilho', 'n@gut.com', '$2b$10$wp/C2l6xsrMZfGW62Yu8Ve8T88i10btvEwdSpg38W8Sft9RTiVgcG');
INSERT INTO public.users VALUES (15, 'Oscar deLucca', 'o@gut.com', '$2b$10$ahpJTidbqh.j2omRAfZVBO2Ekp.6rEJ.Qw8tQbOCxZKoxAdIO.pnO');
INSERT INTO public.users VALUES (16, 'Pablo Servo', 'p@gut.com', '$2b$10$zFg7in053LhC/cllC9DlGOB5Tc7ulzVFpoNZTY1SRuPOaA0QzNSVG');
INSERT INTO public.users VALUES (17, 'Quinci Percciolli', 'q@gut.com', '$2b$10$SfRbEWiuZfZUCZtG5q85mO93QGwXrB0mbA/i4fy8HzJbML.dCpKAq');
INSERT INTO public.users VALUES (18, 'Roberta Farias', 'r@gut.com', '$2b$10$E.PTJ5Wc8uDrbo7TOUGavupi3iFyENi6nnB4rCAD8PwTabTiXOnqO');
INSERT INTO public.users VALUES (19, 'Samira Macario', 's@gut.com', '$2b$10$RnYJW7OqKlQCaRqJVUwTVOQnR4wrJgZ./tnc62bU0i7HcfaqyFXFi');
INSERT INTO public.users VALUES (20, 'Tulio Silva', 't@gut.com', '$2b$10$8MThlSqiCGGK1UjLncrDuuK9.NJy5RE4M5VeivLMcpVPCqUVCegE2');
INSERT INTO public.users VALUES (21, 'Ulisses Varga', 'u@gut.com', '$2b$10$XBGx9PiBNvYTsZMz3xrbM.MwojrSxUx1IVkhlnCg82tbG5ndHZYj6');
INSERT INTO public.users VALUES (22, 'Vitória Nóbrega', 'v@gut.com', '$2b$10$9Bmxo9eMT/860nDMaRTrOeX5WwpOAtaq5mi9ibBuO1y.zYqKBT6ue');
INSERT INTO public.users VALUES (23, 'Wesley Santana', 'w@gut.com', '$2b$10$JFZt1QwCUNCtCWR8GAvyXOyxI36sz1tS5RHy4piVKogaEI/F/QQMy');
INSERT INTO public.users VALUES (24, 'Xavier Frenzo', 'x@gut.com', '$2b$10$/ZTc3VbqHmDzhADPaR.2RevAXPsohkvxVHLo20mvjh.WogyiLjQny');
INSERT INTO public.users VALUES (25, 'Yasmin Teixeira', 'y@gut.com', '$2b$10$y0s1hf69z6a298lGEt9Y1.aeLc8ba5um7IrjLf3lxtAA9yckv.Km2');
INSERT INTO public.users VALUES (26, 'Zilmar Santos', 'z@gut.com', '$2b$10$9fQZLCR4cAIfAY8yRulCuORzf0ZOKrtS0pX69rj9zb1EEsmIw8.mq');


--
-- Data for Name: viwers; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.viwers VALUES (6, 6, 21);
INSERT INTO public.viwers VALUES (24, 2, 13);
INSERT INTO public.viwers VALUES (3, 5, 97);
INSERT INTO public.viwers VALUES (24, 3, 2);
INSERT INTO public.viwers VALUES (3, 4, 19);
INSERT INTO public.viwers VALUES (24, 1, 17);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 6, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 26, true);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: viwers viwers_urlId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.viwers
    ADD CONSTRAINT "viwers_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES public.urls(id);


--
-- Name: viwers viwers_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.viwers
    ADD CONSTRAINT "viwers_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

