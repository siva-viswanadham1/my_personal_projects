import React from 'react'
import { Tabs } from "antd";
import PageTitle from '../../components/PageTitle';
import MoviesList from './MoviesList';
import TheatreList from './TheatreList';
const admin = () => {
  return (
    <div>
        <PageTitle title='admin'/>
        <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Movies" key='1'>
                <MoviesList />
            </Tabs.TabPane>
            <Tabs.TabPane tab='Theatres' key='2'>
                <TheatreList />
            </Tabs.TabPane>
        </Tabs>
    </div>
  )
}

export default admin