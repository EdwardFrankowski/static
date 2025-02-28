module.exports = {
    getMessage: (type, data = {}) => {
        const baseUrl = "https://port-comfort.pro";

        const requiredFields = {
            transfer: ['name', 'phone', 'from', 'to', 'date'],
            investor: ['name', 'phone'],
            nonContact: ['name', 'phone']
        };

        const templates = {
            transfer: () => `
Основная информация:
ФИО: ${data.name || 'Не указано'}
Телефон: ${data.phone || 'Не указано'}
Откуда: ${data.from || 'Не указано'}
Отель: ${data.to || 'Не указано'}
Дата: ${data.date || 'Не указано'}
Время: ${data.time || 'Не указано'}
Детское кресло: ${data.childSeat ? 'Да' : 'Нет'}
Машина: ${data.transport || 'Не указано'}

Дополнительная:
${baseUrl}/transfer/
`,

            investor: () => `
Основная информация:
Имя: ${data.name || 'Не указано'}
Телефон: ${data.phone || 'Не указано'}

Дополнительная:
${baseUrl}/become-owner/
`,

            nonContact: () => `
Основная информация:
ФИО: ${data.name || 'Не указано'}
Телефон: ${data.phone || 'Не указано'}
Доп.гости: ${data.namesGuests || 'Нет'}
Отель: ${data.hotel || 'Не указано'}
    
Дополнительная:
${baseUrl}/remote-non-contact-check-in/
`
        };

        if (!templates[type]) {
            throw new Error(`Unknown message type: ${type}`);
        }

        const missingFields = requiredFields[type]?.filter(field => !data[field]);
        if (missingFields?.length) {
            throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
        }

        return templates[type]().trim();
    }
};