import React from 'react'
import Card from './Card'

const ExerciseList = (props) => (
    props.exercises.map((exercise) => {
        return (
            <div>
                <Card
                    key={exercise.id}
                    title={exercise.title}
                    description={exercise.description}
                    img={exercise.img}
                    leftColor={exercise.leftColor}
                    rightColor={exercise.rightColor}
                />
            </div>
        )
    })
)

export default ExerciseList;
