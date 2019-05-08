class EditorServer {
    autocomplete(current_query) {

    }
}

class MockEditorServer extends EditorServer {
    autocomplete(current_query) {
      return "column";
    }
}