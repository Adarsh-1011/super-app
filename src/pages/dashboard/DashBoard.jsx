import React, { useEffect, useState } from "react";
import styles from "./DashBoard.module.css";
import UserWidget from "../../components/UserWidget";
import NotesWidget from "../../components/NotesWidget";
import CountDownWidget from "../../components/CountDownWidget";
import TimerWidget from "../../components/TimerWidget";
import WeatherWidget from "../../components/WeatherWidget";
import NewsWidget from "../../components/NewsWidget";
import { fetchWeatherData } from "../../apis/weather";
import { fetchNewsData } from "../../apis/news";
// import PromotionPage from "../promotion/PromotionPage";
function Dashboard() {
	const [user, setUser] = useState();
	const [selectedGenres, setSelectedGenres] = useState();
	const [weather, setWeather] = useState();
	const [news, setNews] = useState();

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem("currentUser")));
		setSelectedGenres(JSON.parse(localStorage.getItem("selectedGenres")));
		fetchWeatherData().then((data) => {
			setWeather(data);
		});
		fetchNewsData().then((data) => {
			setNews(data);
		});
	}, []);

	useEffect(() => {
		setSelectedGenres(JSON.parse(localStorage.getItem("selectedGenres")));
		setUser(JSON.parse(localStorage.getItem("currentUser")));
	}, []);

	return (
		<div className={styles.page}>
			<div className={styles.container}>
				<div className={styles.UserWidget}>
					{user && selectedGenres && (
						<UserWidget
							user={user}
							selectedGenres={selectedGenres}
							type={"small"}
						/>
					)}
				</div>
				<div className={styles.WeatherWidget}>
					{weather && <WeatherWidget weather={weather} />}
				</div>
				<div className={styles.TimerWidget}>
					<CountDownWidget />
				</div>
				<div className={styles.NotesWidget}>
					<NotesWidget />
				</div>
				<div className={styles.NewsWidget}>
					{news && <NewsWidget news={news} />}
				</div>
			</div>
		</div>
	);
}

export default Dashboard;