"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event) => {
    const result = event.name ? `Good job ${event.name}!` : 'Good Job';
    return result;
};
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBTyxNQUFNLE9BQU8sR0FBRyxLQUFLLEVBQUUsS0FBb0IsRUFBRSxFQUFFO0lBQ2xELE1BQU0sTUFBTSxHQUFXLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxDQUFDLElBQUksR0FBRyxDQUFBLENBQUMsQ0FBQyxVQUFVLENBQUE7SUFDekUsT0FBTyxNQUFNLENBQUE7QUFDakIsQ0FBQyxDQUFBO0FBSFksUUFBQSxPQUFPLFdBR25CIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBhc3luYyAoZXZlbnQ6IHtuYW1lOnN0cmluZ30pID0+IHtcbiAgICBjb25zdCByZXN1bHQ6IHN0cmluZyA9IGV2ZW50Lm5hbWUgPyBgR29vZCBqb2IgJHtldmVudC5uYW1lfSFgOiAnR29vZCBKb2InXG4gICAgcmV0dXJuIHJlc3VsdFxufVxuIl19