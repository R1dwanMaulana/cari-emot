import axios from "axios";
import { useEffect, useState } from "react";
const Home = () => {
	const [emojiList, setEmojiList] = useState([]);
	const [emojiPeopleBody, setEmojiPeopleBody] = useState([]);
	const [emojiTravelPlaces, setEmojiTravelPlaces] = useState([]);
	const [emojiAnimalsNature, setEmojiAnimalsNature] = useState([]);
	const [emojiFoodDrink, setEmojiFoodDrink] = useState([]);
	const [inputValue, setinputValue] = useState("");
	const [defaultEmojiList, setDefaultEmojiList] = useState([]);
	const [defaultEmojiPeopleBody, setDefaultEmojiPeopleBody] = useState([]);
	const [defaultEmojiTravelPlaces, setDefaultEmojiTravelPlaces] = useState([]);
	const [defaultEmojiAnimalsNature, setDefaultEmojiAnimalsNature] = useState(
		[]
	);
	const [defaultEmojiFoodDrink, setDefaultEmojiFoodDrink] = useState([]);
	const [showEmoji, setShowEmoji] = useState([]);
	const [showEmojiSmile, setShowEmojiSmileyEmotion] = useState(true);
	const [showEmojiPeopleBody, setShowEmojiPeopleBody] = useState(false);
	const [showEmojiTravelPlaces, setShowEmojiTravelPlaces] = useState(false);
	const [showEmojiAnimalsNature, setShowEmojiAnimalsNature] = useState(false);
	const [showEmojiFoodDrink, setShowEmojiFoodDrink] = useState(false);

	const searchEmojis = (e) => {
		console.log(e.target.value);
		setinputValue(e.target.value);
		// if (showEmojiPeopleBody) {
		// 	const updatedEmojiPeopleBody = defaultEmojiPeopleBody.filter((emot) =>
		// 		emot.unicodeName.toLowerCase().includes(inputValue.toLowerCase())
		// 	);
		// 	setShowEmojiPeopleBody(updatedEmojiPeopleBody);
		// }
	};
	const searchEmojisButton = () => {
		if (showEmojiSmile) {
			const updatedEmojiList = defaultEmojiList.filter((emot) =>
				emot.unicodeName.toLowerCase().includes(inputValue.toLowerCase())
			);
			setEmojiList(updatedEmojiList);
		}
		if (showEmojiPeopleBody) {
			const updatedEmojiPeopleBody = defaultEmojiPeopleBody.filter((emot) =>
				emot.unicodeName.toLowerCase().includes(inputValue.toLowerCase())
			);
			setEmojiPeopleBody(updatedEmojiPeopleBody);
		}
		if (showEmojiTravelPlaces) {
			const updatedEmojiTravelPlaces = defaultEmojiTravelPlaces.filter((emot) =>
				emot.unicodeName.toLowerCase().includes(inputValue.toLowerCase())
			);
			setEmojiTravelPlaces(updatedEmojiTravelPlaces);
		}
		if (showEmojiAnimalsNature) {
			const updatedEmojiAnimalsNature = defaultEmojiAnimalsNature.filter(
				(emot) =>
					emot.unicodeName.toLowerCase().includes(inputValue.toLowerCase())
			);
			setEmojiAnimalsNature(updatedEmojiAnimalsNature);
		}
		if (showEmojiFoodDrink) {
			const updatedEmojiFoodDrink = defaultEmojiFoodDrink.filter((emot) =>
				emot.unicodeName.toLowerCase().includes(inputValue.toLowerCase())
			);
			setEmojiFoodDrink(updatedEmojiFoodDrink);
		}
	};
	const resetsearchEmoji = () => {
		setinputValue("");
		if (showEmoji) {
			setEmojiList(defaultEmojiList);
		}
		if (showEmojiPeopleBody) {
			setEmojiPeopleBody(defaultEmojiPeopleBody);
		}
		if (showEmojiTravelPlaces) {
			setEmojiTravelPlaces(defaultEmojiTravelPlaces);
		}
		if (showEmojiAnimalsNature) {
			setEmojiAnimalsNature(defaultEmojiAnimalsNature);
		}
		if (showEmojiFoodDrink) {
			setEmojiFoodDrink(defaultEmojiFoodDrink);
		}
	};

	const fetchData = async (slug) => {
		try {
			const res = await axios.get(
				`https://emoji-api.com/categories/${slug}?access_key=6fa68f40719051a0e7fdf0984c7d9ddcaa077e87`
			);
			if (slug === "smileys-emotion") {
				setEmojiList(res.data);
				setDefaultEmojiList(res.data);
				// console.log(res.data);
			}
			if (slug === "people-body") {
				setEmojiPeopleBody(res.data);
				setDefaultEmojiPeopleBody(res.data);
				console.log(res.data);
			}
			if (slug === "travel-places") {
				setEmojiTravelPlaces(res.data);
				setDefaultEmojiTravelPlaces(res.data);
				console.log(res.data);
			}
			if (slug === "animals-nature") {
				setEmojiAnimalsNature(res.data);
				setDefaultEmojiAnimalsNature(res.data);
				console.log(res.data);
			}
			if (slug === "food-drink") {
				setEmojiFoodDrink(res.data);
				setDefaultEmojiFoodDrink(res.data);
				console.log(res.data);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleClick = (emojiType) => {
		if (emojiType === "smileys_emotion") {
			setShowEmojiSmileyEmotion(true);
			setShowEmojiPeopleBody(false);
			setShowEmojiTravelPlaces(false);
			setShowEmojiAnimalsNature(false);
			setShowEmojiFoodDrink(false);
		}
		if (emojiType === "people_body") {
			setShowEmojiSmileyEmotion(false);
			setShowEmojiPeopleBody(true);
			setShowEmojiTravelPlaces(false);
			setShowEmojiAnimalsNature(false);
			setShowEmojiFoodDrink(false);
		}
		if (emojiType === "travel_places") {
			setShowEmojiSmileyEmotion(false);
			setShowEmojiPeopleBody(false);
			setShowEmojiTravelPlaces(true);
			setShowEmojiAnimalsNature(false);
			setShowEmojiFoodDrink(false);
		}
		if (emojiType === "animals_nature") {
			setShowEmojiSmileyEmotion(false);
			setShowEmojiPeopleBody(false);
			setShowEmojiTravelPlaces(false);
			setShowEmojiAnimalsNature(true);
			setShowEmojiFoodDrink(false);
		}
		if (emojiType === "food_drink") {
			setShowEmojiSmileyEmotion(false);
			setShowEmojiPeopleBody(false);
			setShowEmojiTravelPlaces(false);
			setShowEmojiAnimalsNature(false);
			setShowEmojiFoodDrink(true);
		}
	};

	useEffect(() => {
		fetchData("smileys-emotion");
		fetchData("people-body");
		fetchData("travel-places");
		fetchData("animals-nature");
		fetchData("food-drink");
	}, []);
	return (
		<>
			<div className="max-w-lg mx-auto text-center mt-8 mb-5">
				<p className="font-bold">Cari Emot 😺</p>
				<div className="mx-2 justify-between">
					<input
						onChange={searchEmojis}
						value={inputValue}
						type="search"
						placeholder="Ketik disini"
						className="mt-8 py-2 px-3 mx-2 truncate leading-5 font-medium placeholder-gray-400 border-transparent text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-700 border-gray-600 focus:border-blue-500 rounded-md focus:outline-none bg-gray-200 shadow-lg"
					/>
					<button
						onClick={searchEmojisButton}
						value={inputValue}
						className="mx-1 px-3 py-2 rounded-md text-white font-semibold shadow-lg text-sm bg-blue-500"
					>
						Cari
					</button>
					<button
						onClick={resetsearchEmoji}
						className="px-2 py-2 rounded-md text-white font-semibold shadow-lg text-sm bg-red-500"
					>
						Reset
					</button>
				</div>
				<div className="grid grid-cols-5 mx-4 gap-2 mt-12 text-sm">
					<div
						className="bg-emerald-600 shadow-lg shadow-emerald-600/50 rounded-lg p-1 my-auto cursor-pointer"
						onClick={() => handleClick("smileys_emotion")}
					>
						😃
					</div>
					<div
						className="bg-orange-600 shadow-lg shadow-orange-600/50 rounded-lg p-1 my-auto cursor-pointer"
						onClick={() => handleClick("people_body")}
					>
						👋🏼
					</div>
					<div
						className="bg-pink-600 shadow-lg shadow-pink-600/50 rounded-lg p-1 my-auto cursor-pointer"
						onClick={() => handleClick("travel_places")}
					>
						🚀
					</div>
					<div
						className="bg-cyan-600 shadow-lg shadow-cyan-600/50 rounded-lg p-1 my-auto cursor-pointer"
						onClick={() => handleClick("animals_nature")}
					>
						🐱
					</div>
					<div
						className="bg-fuchsia-600 shadow-lg shadow-fuchsia-600/50 rounded-lg p-1 my-auto cursor-pointer"
						onClick={() => handleClick("food_drink")}
					>
						🍉
					</div>
				</div>
				<div className="overflow-y-scroll h-screen mt-10">
					<div className="mx-4 grid grid-cols-4 gap-3 mt-2 mb-6">
						{showEmojiSmile &&
							emojiList.map((emot) => (
								<div
									key={emot.id}
									className="py-2 px-1 rounded-lg shadow-md my-auto"
								>
									<p>{emot.character}</p>
									<p className="text-black text-xs text-center">
										{emot.unicodeName}
									</p>
								</div>
							))}
						{showEmojiPeopleBody &&
							emojiPeopleBody.map((emot) => (
								<div
									key={emot.id}
									className="py-2 px-1 rounded-lg shadow-md my-auto"
								>
									<p>{emot.character}</p>
									<p className="text-black text-xs text-center">
										{emot.unicodeName}
									</p>
								</div>
							))}
						{showEmojiTravelPlaces &&
							emojiTravelPlaces.map((emot) => (
								<div
									key={emot.id}
									className="py-2 px-1 rounded-lg shadow-md my-auto"
								>
									<p>{emot.character}</p>
									<p className="text-black text-xs text-center">
										{emot.unicodeName}
									</p>
								</div>
							))}
						{showEmojiAnimalsNature &&
							emojiAnimalsNature.map((emot) => (
								<div
									key={emot.id}
									className="py-2 px-1 rounded-lg shadow-md my-auto"
								>
									<p>{emot.character}</p>
									<p className="text-black text-xs text-center">
										{emot.unicodeName}
									</p>
								</div>
							))}
						{showEmojiFoodDrink &&
							emojiFoodDrink.map((emot) => (
								<div
									key={emot.id}
									className="py-2 px-1 rounded-lg shadow-md my-auto"
								>
									<p>{emot.character}</p>
									<p className="text-black text-xs text-center">
										{emot.unicodeName}
									</p>
								</div>
							))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
