export const handler = async (event: {name:string}) => {
    const result: string = event.name ? `Good Job ${event.name}! Thats good.`: 'Good Job! Thats good.'
    return result
}
