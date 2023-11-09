import { ArrowBottomIcon } from '@/assets/SvgIcons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface AccordionProps {
  title: string;
  description: string;
  style?: Object;
  open?: boolean;
}

const Accordion = ({
  description,
  title,
  style,
  open = false,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <View style={[styles.lineBorderPadding, styles.wrapper, style]}>
      <Pressable style={styles.flex} onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.title}>{title}</Text>
        <Text>
          <ArrowBottomIcon />
        </Text>
      </Pressable>
      {isOpen && <Text style={styles.text}>{description}</Text>}
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  wrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  lineBorderPadding: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#141414',
    fontFamily: 'Saira-Medium',
    fontSize: 16,
  },
  text: {
    color: '#424242',
    fontFamily: 'Saira-Light',
    fontSize: 14,
    marginTop: 15
  },
});
