class EditorServer {
    autocomplete(current_query) {

    }

    getAllTopics() {
        return ["xx", "ttt"]
    }
}

class MockEditorServer extends EditorServer {
    autocomplete(current_query) {
      return "column";
    }

    getAllTopics() {
        return ["topic1", "topic2"]
    }
}