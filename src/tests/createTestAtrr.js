import dashify from 'dashify';

export const createTestAttribute = ({
    block: blockPart,
    element,
    context,
}) => {
    const elementPart = element ? `:${dashify(element)}` : '';
    const contextPart = context ? `::${dashify(context)}` : '';

    return `${blockPart}${elementPart}${contextPart}`;
};