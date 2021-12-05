import axios from "axios";

const PROXY_URL = "https://fotmob-cors.herokuapp.com/";
const BASE_URL = "https://www.fotmob.com";

export async function getCityNews(teamId: number) {
    try {
        let response = await axios.get(
            `${PROXY_URL}${BASE_URL}/teams?id=${teamId}&tab=news&type=team&timezone=Asia/Seoul`
        );
        const news = response;
        return news.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getCityFixtures(teamId: number) {
    try {
        let response = await axios.get(
            `${PROXY_URL}${BASE_URL}/teams?id=${teamId}&tab=fixtures&type=team&timezone=Asia/Seoul`
        );

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getCityPlayers(teamId: number) {
    try {
        let response = await axios.get(
            `${PROXY_URL}${BASE_URL}/teams?id=${teamId}&tab=squad&type=team`
        );

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getCityStats(teamId: number) {
    try {
        let response = await axios.get(
            `${PROXY_URL}${BASE_URL}/teams?id=${teamId}&tab=overview&type=team`
        );
        return [response.data.topPlayers, response.data.tableData];
    } catch (error) {
        console.log(error);
    }
}

export async function getPlayerInfo(id: number) {
    try {
        let response = await axios.get(
            `${PROXY_URL}${BASE_URL}/playerData?id=${id}`
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
