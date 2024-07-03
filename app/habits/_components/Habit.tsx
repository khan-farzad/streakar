interface HabitProps {
    prop: {
        title: string,
        completed: string[],
        streak: number
    },
    idx: number,
    fake?: boolean
}

const Habit = ({prop, idx, fake} : HabitProps) => {
    const days = ['S','M','T','W','T','F','S']
    const streak = 4;
    const todayIdx = 2;
    const completed = true

    const x = (new Date(prop.completed[0]))
    const y = x.getDay()
    console.log(x, y)
    console.log(prop.completed.includes((new Date(Date.parse(prop.completed[0])-((y-idx)*86400000))).toJSON().substring(0,10)))

  return (
    <div className={`bg-this-green   ${idx % 2 === 0 ? '-skew-y-1 skew-x-1' : 'skew-y-1 -skew-x-1'} rounded-3xl p-4 ${fake ? 'gap-2 text-xs border' : 'gap-4 border-2'}   border-primary flex flex-col justify-between`}>
        <h3 className={`${fake ? 'text-lg' : 'text-3xl'} font-medium`}>{prop.title}</h3>
        <p className={`text-primary text-center ${fake ? 'text-xs' : 'text-lg'}`}>🔥 Streak: {prop.streak} days 🔥</p>
        <div className={`flex justify-between items-center ${fake ? 'gap-1' : 'gap-4'}`}>
        {days.map((day, idx) => (
          <div
            key={idx + day}
            className={`rounded-full ${fake ? 'size-6 p-1' : 'size-10 p-2'}  flex justify-center items-center ${prop.completed.includes((new Date(Date.parse(prop.completed[0])-((y-idx)*86400000))).toJSON().substring(0,10)) ? 'bg-primary text-this-white' : 'border-this-border border-4 text-primary'}`}
          >
            {day}
          </div>
        ))}
    </div>
        {!fake && <button className={`py-2 px-3 w-32 transition-colors rounded-3xl font-semibold ${completed ? 'border-2 border-white hover:bg-white' : 'bg-black text-white'}`}>completed </button>}
    </div>
  )
}

export default Habit