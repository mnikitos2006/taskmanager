import {useState} from "react";

export const getTasks = () => {
    const category = {
        work: "Work",
        hobby: "Hobby",
        home: "Home",
        eat: "Eat"
    }
    const levelImportance = {
        hard: "Hard",
        normal: "Normal",
        easy: "Easy"
    }
    return [
        {
            id: 1,
            text: "Task1",
            color: getColorTask()[0],
            data: new Date().toISOString(),
            category: category.work,
            levelImportance: levelImportance.hard,
            setAlarm: new Date().toISOString(),
            timeDuring: new Date().toISOString()
        },
        {
            id: 2, text: "Task2", color: getColorTask()[1], data: new Date().toISOString(),
            category: category.work,
            levelImportance: levelImportance.hard,
            setAlarm: new Date().toISOString(),
            timeDuring: new Date().toISOString()
        },
        {
            id: 3, text: "Task2", color: getColorTask()[2], data: new Date().toISOString(),
            category: category.work,
            levelImportance: levelImportance.hard,
            setAlarm: new Date().toISOString(),
            timeDuring: new Date().toISOString()
        },
        {
            id: 4, text: "Task3", color: getColorTask()[3], data: new Date().toISOString(),
            category: category.work,
            levelImportance: levelImportance.hard,
            setAlarm: new Date().toISOString(),
            timeDuring: new Date().toISOString()
        }
    ]
}
export const getColorTask = () => {
    return ["#FFC8DD", "#CEEDC7", "#FF9494", "#FFD4B2", "#FFF6BD", "#D7E3FC"]
}
