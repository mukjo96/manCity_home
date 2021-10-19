import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootStateInterface } from "../../../redux/interfaces/ifRootState";
import {
    actApiInit,
    actApiRequest,
} from "../../../redux/actions/actApiExample";

import LatestNews from "../components/latestNews";
import MatchSchedule from "../components/matchSchedule";
import PlayerStats from "../components/playerStats";
import TeamPlayers from "../components/teamPlayers";
import { IApiExampleState } from "../../../redux/interfaces/iApiExample/iApiExample.interfaces";
import { IExampleState } from "redux/interfaces/iExample/iExample.interfaces";
import { select } from "redux/actions/actExample";
import SelectTeam from "@features/common/selectTeam";
import NewsBanner from "../components/newsBanner";
import { useTranslation } from "next-i18next";

const Home = () => {
    const dispatch = useDispatch();
    const team = useSelector(
        (state: RootStateInterface): IExampleState => state.rdcExample
    );
    const { apiResult, error } = useSelector(
        (state: RootStateInterface): IApiExampleState => state.rdcApiExample
    );
    const { t } = useTranslation("common");

    useEffect(() => {
        dispatchApi();
    }, [team.teamId]);

    const dispatchApi = () => {
        dispatch(actApiInit());
        dispatch(actApiRequest());
        dispatch(select(team));
    };
    if (team.teamId === 0 || team.teamId === null) {
        return <SelectTeam />;
    } else {
        return (
            <Fragment>
                <NewsBanner
                    news={apiResult?.newsList[0]}
                    header={t("FIRST TEAM NEWS")}
                />
                <MatchSchedule
                    matchList={apiResult?.matchList}
                    currentMonth={apiResult?.currentMonth}
                    teamId={team.teamId}
                />
                <LatestNews
                    newsList={apiResult?.newsList}
                    teamId={team.teamId}
                />
                <TeamPlayers dataList={apiResult?.playerList} />
                <PlayerStats
                    statList={apiResult?.statList}
                    color={team.teamColor}
                    teamId={team.teamId}
                />
                {/* <AdBanner teamColor={team.teamColor} /> */}
                {/* <Sponsorship /> */}
                <BackDiv></BackDiv>
            </Fragment>
        );
    }
};

export default Home;

const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 600px;
    }
`;

const BackDiv = styled.div`
    height: 50px;
`;
