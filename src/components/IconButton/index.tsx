import { Feather } from '@expo/vector-icons';
import React from 'react';

import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

interface IconButtonProps extends TouchableOpacityProps {
  icon: React.ComponentProps<typeof Feather>['name'] | { svg: React.ReactNode };
}

export function IconButton({ icon, ...rest }: IconButtonProps): JSX.Element {
  const theme = useTheme();

  return (
    <TouchableOpacity {...rest}>
      {typeof icon === 'object' ? (
        icon.svg
      ) : (
        <>
          <Feather name={icon} size={24} color={theme.colors.text} />
        </>
      )}
    </TouchableOpacity>
  );
}
