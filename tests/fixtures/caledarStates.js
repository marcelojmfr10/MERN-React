

export const events = [
    {
        id: '1',
        title: 'Cumpleaños del jefe',
        notes: 'hay que comprar el pastel',
        start: new Date('2024-03-30 13:00:00'),
        end: new Date('2024-03-30 15:00:00'),
    },
    {
        id: '2',
        title: 'Cumpleaños de la rosa',
        notes: 'notas',
        start: new Date('2024-03-29 13:00:00'),
        end: new Date('2024-03-29 15:00:00'),
    }
];

export const initialState = {
    isLoadingEvents: true,
    events: [],
    activeEvent: null,
}

export const calendarWithEventsState = {
    isLoadingEvents: false,
    events: [...events],
    activeEvent: null
}

export const calendarWithActiveEventState = {
    isLoadingEvents: false,
    events: [...events],
    activeEvent: { ...events[0] }
}