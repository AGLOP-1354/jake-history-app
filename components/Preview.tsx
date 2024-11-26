import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import "highlight.js/styles/atom-one-dark.css";

type Props = {
  content: string;
  storyTitle: string;
  onlyContent?: boolean;
  style?: object;
};

const Preview = ({ content, style }: Props) => {
  const markdownRules = {
    code_block: (node: any) => {
      return (
        <View key={node.key}>
          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            customStyle={{backgroundColor: '#2d2d2d'}}
          >
            {node.content}
          </SyntaxHighlighter>
        </View>
      );
    }
  };

  return (
    <ScrollView style={[styles.container, style]}>
      <Markdown
        rules={markdownRules}
        style={{
          body: {
            backgroundColor: '#000',
            color: '#fff',
          },
          code_inline: {
            backgroundColor: '#2d2d2d',
            color: '#e6e6e6',
          },
          code_block: {
            backgroundColor: '#2d2d2d',
            color: '#e6e6e6',
          },
          fence: {
            backgroundColor: '#2d2d2d',
            color: '#e6e6e6',
          }
        }}
      >
        {content}
      </Markdown>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 36,
    color: '#fff',
  },
});

export default Preview;