import { useState } from "react";
import { regions } from "../data/regionsData.js";
import { useWeather } from "../utils/util.js";
import WeatherCardList from "../components/WeatherCardList.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function WeathersPage() {
  const [cityCode, setCityCode] = useState(null);
  const [cityName, setCityName] = useState("");
  const { weather, loading, error } = useWeather(cityCode);

  const handleGet = (code, name) => {
    setCityCode(code);
    setCityName(name);
  };

  return (
    <div>
      {/* ページヘッダー */}
      <PageHeader onGet={handleGet}/>

      {/* メインコンテナ */}
      <div className="max-w-xl m-auto">
        {/* ○○県の天気タイトル */}
        {cityName ? (
          <div>
            <p className="text-xl py-6 font-semibold">{cityName}の天気</p>
          </div>
        ) : (
          <div>
            <p className="text-xl py-3">都道府県を選択してください</p>
          </div>
        )}

        {/* ロード中の表示 */}
        {loading && (
          <div>
            <p className="text-xl py-3">天気情報を取得中...</p>
          </div>
        )}

        {/* エラー表示 */}
        {error && (
          <div>
            <p className="text-xl py-3 text-red-600">{error}</p>
          </div>
        )}

        {/* 天気予報カード */}
        {!loading && !error &&(<WeatherCardList weather={weather}/>)}

        {/* 天気予報説明文 */}
        {!loading && !error && <div >
          <div className="bg-white/60 rounded-2xl p-4 font-medium">
            <p className="px-10">{weather?.description.text}</p>
          </div>
        </div>}
      </div>
    </div>
  );
}
