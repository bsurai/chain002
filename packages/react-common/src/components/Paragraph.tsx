import { TextProps } from './Text';
import { Theme } from '../themes/types';
import Text from './Text';
import * as React from 'react';

type ParagraphContext = {
    theme: Theme,
};

const Paragraph: React.SFC<TextProps> = (props: TextProps, { theme }: ParagraphContext) => {
    const {
    marginBottom = theme.paragraph.marginBottom,
        maxWidth = theme.block.maxWidth,
        ...restProps
  } = props;
    return (
        <Text marginBottom={marginBottom} maxWidth={maxWidth} {...restProps} />
    );
};

Paragraph.contextTypes = {
    theme: React.PropTypes.object,
};

export default Paragraph;
