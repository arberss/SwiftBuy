import { Pressable, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { sizes } from '../helper';
import { styles } from '../styles';

interface ProductSizesProps {
  selectedSize: string | null;
  handleSizeSelection: (size: string) => void;
}

const ProductSizes = ({
  selectedSize,
  handleSizeSelection,
}: ProductSizesProps) => {
  return (
    <ScrollView horizontal style={styles.lineBorderPadding}>
      {sizes.map((item) => {
        return (
          <Pressable
            key={item.id}
            style={[
              styles.sizeBody,
              item.size === selectedSize && styles.sizeActiveBody,
            ]}
            onPress={() => handleSizeSelection(item.size)}
          >
            <Text
              style={[
                styles.sizeText,
                item.size === selectedSize && styles.sizeActiveText,
              ]}
            >
              {item.size}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default ProductSizes;
